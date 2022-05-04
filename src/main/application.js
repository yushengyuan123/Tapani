"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WindowManager_1 = __importDefault(require("./WindowManager"));
const MenuManager_1 = __importDefault(require("./MenuManager"));
const events_1 = require("events");
const _1 = require("~");
const electron_1 = require("electron");
const buffer = __importStar(require("buffer"));
class Application extends events_1.EventEmitter {
    menuManager;
    windowManager;
    constructor() {
        super();
        this.setupMenuManager();
        this.initWindowManager();
        this.handleCommand();
    }
    setupMenuManager() {
        this.menuManager = new MenuManager_1.default();
    }
    initWindowManager() {
        this.windowManager = new WindowManager_1.default();
    }
    sendCommandToAll(command, ...args) {
        if (!this.emit(command)) {
            console.log('发送时间');
            this.windowManager.getWindowList().forEach(window => {
                this.windowManager.sendCommandTo(window, command, ...args);
            });
        }
    }
    handleFileWithCommand(filePath, command) {
        if (!filePath) {
            return;
        }
        this.sendCommandToAll(command, {
            basePath: filePath,
            buffer: buffer
        });
        // fs.readFile(filePath)
        //   .then((buffer: Buffer) => {
        //     this.sendCommandToAll(command, {
        //       basePath: filePath,
        //       buffer: buffer
        //     })
        //   }).catch((error: string) => {
        //     logger.warn(`[Player] read file error: ${filePath}`, error)
        //   })
    }
    handleCommand() {
        // 主进程主动打开文件
        this.on(_1.Command.APPLICATION_OPEN_FILE, () => {
            electron_1.dialog.showOpenDialog({
                properties: ['openFile']
            }).then(({ canceled, filePaths }) => {
                if (canceled || filePaths.length === 0) {
                    return;
                }
                this.handleFileWithCommand(filePaths[0], _1.Command.VIDEO_LOCAL_SELECT);
            });
        });
    }
}
exports.default = Application;
//# sourceMappingURL=application.js.map