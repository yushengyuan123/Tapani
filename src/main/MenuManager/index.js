"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const menus_1 = __importDefault(require("./menus"));
const handleCommand = (item) => {
    const command = item.command;
    // @ts-ignore
    global.application.sendCommandToAll(command);
};
const translateTemplate = (template) => {
    const menuTemplate = [];
    template.forEach(item => {
        const menuTemplateItem = {
            label: item.label,
            id: item.id,
        };
        if (item.command) {
            menuTemplateItem.click = () => {
                handleCommand(item);
            };
        }
        if (item.submenu) {
            menuTemplateItem.submenu = translateTemplate(item.submenu);
        }
        menuTemplate.push(menuTemplateItem);
    });
    return menuTemplate;
};
class MenuManager {
    template;
    constructor() {
        this.load();
        this.setup();
    }
    load() {
        this.template = menus_1.default;
    }
    build() {
        return electron_1.Menu.buildFromTemplate(translateTemplate(this.template));
    }
    setup() {
        const menu = this.build();
        electron_1.Menu.setApplicationMenu(menu);
    }
}
exports.default = MenuManager;
//# sourceMappingURL=index.js.map