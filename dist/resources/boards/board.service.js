"use strict";
const boardsRepo = require('./board.memory.repository');
const getAllBoards = () => boardsRepo.getAll();
const getBoardById = (id) => boardsRepo.getById(id);
const createBoard = (title, columns) => boardsRepo.create(title, columns);
const deleteBoardById = (id) => boardsRepo.deleteById(id);
const updateBoardById = (id, title, columns) => boardsRepo.updateById(id, title, columns);
module.exports = { getAllBoards, getBoardById, createBoard, deleteBoardById, updateBoardById };
//# sourceMappingURL=board.service.js.map