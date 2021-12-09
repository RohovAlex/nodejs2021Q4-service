"use strict";
var _a;
const { v4: uuid } = require('uuid');
let boards = [];
class Board {
}
_a = Board;
Board.getById = async (id) => boards.find((board) => board.id === id);
Board.getAll = async () => boards;
Board.create = async (title, columns) => {
    const newBoard = {
        id: uuid(),
        title, columns
    };
    boards.push(newBoard);
    return newBoard;
};
Board.deleteById = async (id) => {
    boards = boards.filter((board) => board.id !== id);
};
Board.updateById = async (id, title, columns) => {
    boards = boards.map((board) => board.id === id ? { id, title, columns } : board);
    const updatedBoard = await getById(id);
    return updatedBoard;
};
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
//# sourceMappingURL=board.memory.repository.js.map