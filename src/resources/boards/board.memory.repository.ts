const {v4: uuid} = require('uuid');
let boards: any[]= [];
class Board {
  boards: any

  static getById = async (id) => boards.find((board) => board.id === id);

  static getAll = async () => boards;

  static create = async (title, columns) => {
    const newBoard = {
      id: uuid(),
      title, columns
    }
    boards.push(newBoard)
    return newBoard;
  };

  static deleteById = async (id) => {
    boards = boards.filter((board) => board.id !== id);
  };

  static updateById = async (id, title, columns) => {
    boards = boards.map((board) => board.id === id ? {id, title, columns} : board);
    const updatedBoard = await getById(id);
    return updatedBoard;
  };
  
}


// const getAllBoards = async () => boards;

// const getBoardById = async (id) => boards.find((board) => board.id === id);

// const create = async (title, columns) => {
//     const newBoard = {
//       id: uuid(),
//       title, columns
//     }
//     boards.push(newBoard)
//   return newBoard;
// };

// const deleteById = async (id) => {
//   boards = boards.filter((board) => board.id !== id);
// };

// const updateById = async (id, title, columns) => {
//   boards = boards.map((board) => board.id === id ? {id, title, columns} : board);
//   const updatedBoard = await getById(id);
//   return updatedBoard;
// };

// module.exports = { getAll, getById, create, deleteById, updateById };
module.exports = Board;