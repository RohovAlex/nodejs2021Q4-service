"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_service_1 = __importDefault(require("./board.service"));
const task_memory_repository_1 = __importDefault(require("../tasks/task.memory.repository"));
function boardRoutes(app, options, done) {
    app.get('/', async (req, reply) => {
        const boards = await board_service_1.default.getAllBoards();
        reply.send(boards);
    });
    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const board = await board_service_1.default.getBoardById(id);
        if (board) {
            reply.code(200);
            reply.send(board);
        }
        else {
            reply.code(404);
            reply.send();
        }
    });
    app.post('/', async (req, reply) => {
        const { title, columns } = req.body;
        const board = await board_service_1.default.createBoard(title, columns);
        reply.code(201);
        reply.send(board);
    });
    app.delete('/:id', async (req, reply) => {
        const { id } = req.params;
        await board_service_1.default.deleteBoardById(id);
        task_memory_repository_1.default.deleteTasksWithBoard(id);
        reply.code(204);
        reply.send();
    });
    app.put('/:id', async (req, reply) => {
        const { id } = req.params;
        const { title, columns } = req.body;
        const board = await board_service_1.default.updateBoardById(id, title, columns);
        reply.code(200);
        reply.send(board);
    });
    done();
}
exports.default = boardRoutes;
//# sourceMappingURL=board.router.js.map