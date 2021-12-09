const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (name, login, password) => usersRepo.create(name, login, password)

const deleteById = (id) => usersRepo.deleteById(id);

const updateById = (id, name, login, password) => usersRepo.updateById(id, name, login, password);

const toResponse = (user) => usersRepo.toResponse(user)

module.exports = { getAll, getById, create, deleteById, updateById };
