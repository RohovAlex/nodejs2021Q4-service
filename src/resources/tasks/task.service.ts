import TaskRepo from './task.memory.repository';

const getAllTasks = () => TaskRepo.getAll();

const getTaskById = (id) => TaskRepo.getById(id);

const createTask = (
    title,
    order,
    description,
    userId,
    boardId,
    columnId) => TaskRepo.create(
        title,
        order,
        description,
        userId,
        boardId,
        columnId);

const deleteTaskById = (id) => TaskRepo.deleteById(id);

const updateTaskById = (
    id, 
    title,
    order,
    description,
    userId,
    boardId,
    columnId) => TaskRepo.updateById(
        id, 
        title,
        order,
        description,
        userId,
        boardId,
        columnId);

export default { getAllTasks, getTaskById, createTask, deleteTaskById, updateTaskById };
