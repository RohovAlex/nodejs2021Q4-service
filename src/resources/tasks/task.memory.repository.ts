import {v4 as uuid} from 'uuid';
import { ITask } from './task.interface';

let tasks: ITask[] = [];

export default class Task {

  tasks: ITask[] = tasks;

  static getAll = async () : Promise<ITask[]> => tasks;

  static getById = async (id: string) : Promise<ITask | undefined> => tasks.find((task) => task.id === id);

  static create = async (params: {[key: string]: string}): Promise<ITask> => {
    const { title,
            order,
            description,
            userId,
            boardId,
            columnId } = params;

      const newTask: ITask = {
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

  static deleteById = async (id: string): Promise<void> => {
    tasks = tasks.filter((task) => task.id !== id);
  };

  static updateById = async (params: {[key: string]: string}): Promise<ITask | undefined> => {
    const { id, 
            title,
            order,
            description,
            userId,
            boardId,
            columnId } = params;
    
    tasks = tasks.map((task) => task.id === id ? {
      id, 
      title,
      order,
      description,
      userId,
      boardId,
      columnId} : task);
    const updatedTask = await Task.getById(id);
    return updatedTask;
  };

  static updateUserIdToNull = (userId: string, nullUserId: null): void => {
    tasks.forEach((task) => {
      if(task.userId === userId) {
        Object.assign(task, {"userId": nullUserId});
      }
    })     
  }

  static deleteTasksWithBoard = (boardId: string): void => {
    tasks = tasks.filter((task) => task.boardId !== boardId);     
  }
}
