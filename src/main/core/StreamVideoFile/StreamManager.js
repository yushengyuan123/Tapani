"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamManager = void 0;
const stream_1 = require("stream");
const util_1 = require("util");
class StreamManager {
    steps;
    pipeline;
    constructor() {
        this.pipeline = (0, util_1.promisify)(stream_1.pipeline);
    }
    registerSteps(steps) {
        this.steps = steps;
    }
    run() {
        this.pipeline(...this.steps);
    }
}
exports.streamManager = new StreamManager();
//# sourceMappingURL=StreamManager.js.map