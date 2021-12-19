"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_memory_repository_1 = __importDefault(require("./user.memory.repository"));
const getAll = () => user_memory_repository_1.default.getAll();
const getById = (id) => user_memory_repository_1.default.getById(id);
const create = (name, login, password) => user_memory_repository_1.default.create(name, login, password);
const deleteById = (id) => user_memory_repository_1.default.deleteById(id);
const updateById = (id, name, login, password) => user_memory_repository_1.default.updateById(id, name, login, password);
const toResponse = (user) => user_memory_repository_1.default.toResponse(user);
exports.default = { getAll, getById, create, deleteById, updateById };
//# sourceMappingURL=user.service.js.map