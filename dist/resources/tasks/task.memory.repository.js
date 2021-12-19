"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let tasks = [];
class Task {
    constructor() {
        this.tasks = tasks;
    }
}
exports.default = Task;
_a = Task;
Task.getAll = async () => tasks;
Task.getById = async (id) => tasks.find((task) => task.id === id);
Task.create = async (params) => {
    const { title, order, description, userId, boardId, columnId } = params;
    const newTask = {
        id: (0, uuid_1.v4)(),
        title,
        order,
        description,
        userId,
        boardId,
        columnId
    };
    tasks.push(newTask);
    return newTask;
};
Task.deleteById = async (id) => {
    tasks = tasks.filter((task) => task.id !== id);
};
Task.updateById = async (params) => {
    const { id, title, order, description, userId, boardId, columnId } = params;
    tasks = tasks.map((task) => task.id === id ? {
        id,
        title,
        order,
        description,
        userId,
        boardId,
        columnId
    } : task);
    const updatedTask = await Task.getById(id);
    return updatedTask;
};
Task.updateUserIdToNull = (userId, nullUserId) => {
    tasks.forEach((task) => {
        if (task.userId === userId) {
            Object.assign(task, { "userId": nullUserId });
        }
    });
};
Task.deleteTasksWithBoard = (boardId) => {
    tasks = tasks.filter((task) => task.boardId !== boardId);
};
//# sourceMappingURL=task.memory.repository.js.map