const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = (id) => boardsRepo.getById(id);

const create = (title, columns) => boardsRepo.create(title, columns)

const deleteById = (id) => boardsRepo.deleteById(id);

const updateById = (id, title, columns) => boardsRepo.updateById(id, title, columns);

module.exports = { getAll, getById, create, deleteById, updateById };
