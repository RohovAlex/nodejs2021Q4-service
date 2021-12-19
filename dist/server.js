"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// migration to ts
const config_1 = __importDefault(require("./common/config"));
const app_1 = __importDefault(require("./app"));
const start = async () => {
    try {
        await app_1.default.listen(config_1.default);
    }
    catch (error) {
        app_1.default.log.error(error);
    }
};
start();
//# sourceMappingURL=server.js.map