"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("~");
const template = [
    {
        id: 'menu.app',
        label: 'xxx',
    },
    {
        id: 'menu.file',
        label: '文件',
        submenu: [
            {
                id: 'file.select',
                label: '打开文件',
                command: _1.Command.APPLICATION_OPEN_FILE
            },
            {
                id: 'folder.select',
                label: '打开文件夹',
                command: _1.Command.APPLICATION_OPEN_FILE
            },
        ]
    }
];
exports.default = template;
//# sourceMappingURL=index.js.map