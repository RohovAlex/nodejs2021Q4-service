import boardsRepo from './board.memory.repository';

const getAllBoards = () => boardsRepo.getAll();

const getBoardById = (id) => boardsRepo.getById(id);

const createBoard = (title, columns) => boardsRepo.create(title, columns)

const deleteBoardById = (id) => boardsRepo.deleteById(id);

const updateBoardById = (id, title, columns) => boardsRepo.updateById(id, title, columns);

export default { getAllBoards, getBoardById, createBoard, deleteBoardById, updateBoardById };
