import { FastifyReply } from "fastify";

import boardService from './board.service';
import tasksRepo from '../tasks/task.memory.repository';

export default function boardRoutes(app, options, done) {

    app.get('/', async (req, reply: FastifyReply) => {
        const boards = await boardService.getAllBoards();
        reply.send(boards);
    })

    app.get('/:id', async (req, reply: FastifyReply) => {
        const { id } = req.params;
        const board = await boardService.getBoardById(id);
        if(board) {
            reply.code(200);
            reply.send(board);
        } else {
            reply.code(404);
            reply.send();
        }    
    })

    app.post('/', async (req, reply: FastifyReply) => {
        const { title, columns } = req.body;
        const board = await boardService.createBoard(title, columns);
        reply.code(201);
        reply.send(board);
    })

    app.delete('/:id', async (req, reply: FastifyReply) => {
        const { id } = req.params;
        await boardService.deleteBoardById(id);
        tasksRepo.deleteTasksWithBoard(id);
        reply.code(204);
        reply.send();
    })

    app.put('/:id', async (req, reply: FastifyReply) => {
        const { id } = req.params;
        const { title, columns } = req.body;
        const board = await boardService.updateBoardById(id, title, columns);
        reply.code(200);
        reply.send(board);
    })

    done()
}
