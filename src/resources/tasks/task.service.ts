import TaskRepo from './task.memory.repository';
import ITask from './task.interface';
const getAllTasks = (): Promise<ITask[]> => TaskRepo.getAll();

const getTaskById = (id: string): Promise<ITask | undefined> => TaskRepo.getById(id);

const createTask = ({
    title,
    order,
    description,
    userId,
    boardId,
    columnId}: {[key: string]: string}) : Promise<ITask> => TaskRepo.create({
        title,
        order,
        description,
        userId,
        boardId,
        columnId});

const deleteTaskById = (id: string): Promise<void> => TaskRepo.deleteById(id);

const updateTaskById = ({
    id, 
    title,
    order,
    description,
    userId,
    boardId,
    columnId}: {[key: string]: string}) : Promise<ITask | undefined> => TaskRepo.updateById({
        id, 
        title,
        order,
        description,
        userId,
        boardId,
        columnId});

export default { getAllTasks, getTaskById, createTask, deleteTaskById, updateTaskById };
