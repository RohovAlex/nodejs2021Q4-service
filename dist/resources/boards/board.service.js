"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_memory_repository_1 = __importDefault(require("./board.memory.repository"));
const getAllBoards = () => board_memory_repository_1.default.getAll();
const getBoardById = (id) => board_memory_repository_1.default.getById(id);
const createBoard = (title, columns) => board_memory_repository_1.default.create(title, columns);
const deleteBoardById = (id) => board_memory_repository_1.default.deleteById(id);
const updateBoardById = (id, title, columns) => board_memory_repository_1.default.updateById(id, title, columns);
exports.default = { getAllBoards, getBoardById, createBoard, deleteBoardById, updateBoardById };
//# sourceMappingURL=board.service.js.map