"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let boards = [];
class Board {
}
exports.default = Board;
_a = Board;
Board.getById = async (id) => boards.find((board) => board.id === id);
Board.getAll = async () => boards;
Board.create = async (title, columns) => {
    const newBoard = {
        id: (0, uuid_1.v4)(),
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
    const updatedBoard = await Board.getById(id);
    return updatedBoard;
};
//# sourceMappingURL=board.memory.repository.js.map