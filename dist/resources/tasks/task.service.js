"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_memory_repository_1 = __importDefault(require("./task.memory.repository"));
const getAllTasks = () => task_memory_repository_1.default.getAll();
const getTaskById = (id) => task_memory_repository_1.default.getById(id);
const createTask = ({ title, order, description, userId, boardId, columnId }) => task_memory_repository_1.default.create({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
});
const deleteTaskById = (id) => task_memory_repository_1.default.deleteById(id);
const updateTaskById = ({ id, title, order, description, userId, boardId, columnId }) => task_memory_repository_1.default.updateById({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
});
exports.default = { getAllTasks, getTaskById, createTask, deleteTaskById, updateTaskById };
//# sourceMappingURL=task.service.js.map