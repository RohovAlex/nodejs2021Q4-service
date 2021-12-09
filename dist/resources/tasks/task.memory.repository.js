"use strict";
var _a;
const { v4: uuid } = require('uuid');
let tasks = [];
class Task {
    constructor() {
        this.tasks = tasks;
    }
}
_a = Task;
Task.getAll = async () => tasks;
Task.getById = async (id) => tasks.find((task) => task.id === id);
Task.create = async (title, order, description, userId, boardId, columnId) => {
    const newTask = {
        id: uuid(),
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
Task.updateById = async (id, title, order, description, userId, boardId, columnId) => {
    tasks = tasks.map((task) => task.id === id ? {
        id,
        title,
        order,
        description,
        userId,
        boardId,
        columnId
    } : task);
    const updatedTask = await getById(id);
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
// const getAll = async () => tasks;
// const getById = async (id) => tasks.find((task) => task.id === id);
// const create = async (title,
//   order,
//   description,
//   userId,
//   boardId,
//   columnId) => {
//     const newTask = {
//       id: uuid(),
//       title,
//       order,
//       description,
//       userId,
//       boardId,
//       columnId
//     }
//     tasks.push(newTask)
//   return newTask;
// };
// const deleteById = async (id) => {
//   tasks = tasks.filter((task) => task.id !== id);
// };
// const updateById = async (
//   id, 
//   title,
//   order,
//   description,
//   userId,
//   boardId,
//   columnId) => {
//   tasks = tasks.map((task) => task.id === id ? {
//     id, 
//     title,
//     order,
//     description,
//     userId,
//     boardId,
//     columnId} : task);
//   const updatedTask = await getById(id);
//   return updatedTask;
// };
// const updateUserIdToNull = (userId, nullUserId) => {
//   tasks.forEach((task) => {
//     if(task.userId === userId) {
//       Object.assign(task, {"userId": nullUserId});
//     }
//   })     
// }
// const deleteTasksWithBoard = (boardId) => {
//   tasks = tasks.filter((task) => task.boardId !== boardId);     
// }
// module.exports = { getAll, getById, create, deleteById, updateById, updateUserIdToNull, deleteTasksWithBoard };
module.exports = Task;
//# sourceMappingURL=task.memory.repository.js.map