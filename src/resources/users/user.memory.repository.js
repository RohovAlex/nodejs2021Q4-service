const {v4: uuid} = require('uuid');

let users = [];

const getAll = async () => users;

const getById = async (id) => users.find((user) => user.id === id);

const create = async (name, login, password) => {
    const newUser = {
      id: uuid(),
      name, login, password
    }
    users.push(newUser)
  return newUser;
};

const deleteById = async (id) => {
  users = users.filter((user) => user.id !== id);
};

const updateById = async (id, name, login, password) => {
  users = users.map((user) => user.id === id ? {id, name, login, password} : user);
  const updatedUser = await getById(id);
  return updatedUser;
};

module.exports = { getAll, getById, create, deleteById, updateById };
