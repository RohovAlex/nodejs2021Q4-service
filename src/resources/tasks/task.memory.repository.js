const {v4: uuid} = require('uuid');

let tasks = [];

const getAll = async () => tasks;

const getById = async (id) => tasks.find((task) => task.id === id);

const create = async (title,
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

const deleteById = async (id) => {
  tasks = tasks.filter((task) => task.id !== id);
};

const updateById = async (
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

const updateUserIdToNull = (userId, nullUserId) => {
  tasks.forEach((task) => {
    if(task.userId === userId) {
      Object.assign(task, {"userId": nullUserId});
    }
  })     
}

module.exports = { getAll, getById, create, deleteById, updateById, updateUserIdToNull };
