"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    /* 仅在主进程才有的命令 */
    Command["APPLICATION_OPEN_FILE"] = "application:open-file";
    /* 渲染进程才有的命令 */
    Command["VIDEO_LOCAL_SELECT"] = "video:local-select";
})(Command = exports.Command || (exports.Command = {}));
//# sourceMappingURL=index.js.map