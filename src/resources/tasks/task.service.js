const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getById = (id) => tasksRepo.getById(id);

const create = (
    title,
    order,
    description,
    userId,
    boardId,
    columnId) => tasksRepo.create(
        title,
        order,
        description,
        userId,
        boardId,
        columnId);

const deleteById = (id) => tasksRepo.deleteById(id);

const updateById = (
    id, 
    title,
    order,
    description,
    userId,
    boardId,
    columnId) => tasksRepo.updateById(
        id, 
        title,
        order,
        description,
        userId,
        boardId,
        columnId);

module.exports = { getAll, getById, create, deleteById, updateById };
