import {v4 as uuid} from 'uuid';

let tasks = [];

export default class Task {
  tasks: any[] = tasks;

  static getAll = async () => tasks;

  static getById = async (id) => tasks.find((task) => task.id === id);

  static create = async (title,
    order,
    description,
    userId,
    boardId,
    columnId) => {
      const newTask = {
        id: uuid(),
        title,
        order,
        description,
        userId,
        boardId,
        columnId
      }
      tasks.push(newTask)
    return newTask;
  };

  static deleteById = async (id) => {
    tasks = tasks.filter((task) => task.id !== id);
  };

  static updateById = async (
    id, 
    title,
    order,
    description,
    userId,
    boardId,
    columnId) => {
    tasks = tasks.map((task) => task.id === id ? {
      id, 
      title,
      order,
      description,
      userId,
      boardId,
      columnId} : task);
    const updatedTask = await getById(id);
    return updatedTask;
  };

  static updateUserIdToNull = (userId, nullUserId) => {
    tasks.forEach((task) => {
      if(task.userId === userId) {
        Object.assign(task, {"userId": nullUserId});
      }
    })     
  }

  static deleteTasksWithBoard = (boardId) => {
    tasks = tasks.filter((task) => task.boardId !== boardId);     
  }
}
