const {v4: uuid} = require('uuid');

let boards = [];

const getAll = async () => boards;

const getById = async (id) => boards.find((board) => board.id === id);

const create = async (title, columns) => {
    const newBoard = {
      id: uuid(),
      title, columns
    }
    boards.push(newBoard)
  return newBoard;
};

const deleteById = async (id) => {
  boards = boards.filter((board) => board.id !== id);
};

const updateById = async (id, title, columns) => {
  boards = boards.map((board) => board.id === id ? {id, title, columns} : board);
  const updatedBoard = await getById(id);
  return updatedBoard;
};

module.exports = { getAll, getById, create, deleteById, updateById };
