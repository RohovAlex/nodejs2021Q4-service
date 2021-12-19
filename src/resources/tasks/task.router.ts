import { FastifyReply } from "fastify";
import taskService from './task.service';

export default function taskRoutes(app, options, done) {

    app.get('/', async (req, reply: FastifyReply) => {
        const tasks = await taskService.getAllTasks();
        reply.send(tasks);
    })

    app.get('/:id', async (req, reply: FastifyReply) => {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        if(task) {
            reply.code(200);
            reply.send(task);
        } else {
            reply.code(404);
            reply.send();
        }
    })

    app.post('/', async (req, reply: FastifyReply) => {
        const { 
            title,
            order,
            description,
            userId,
            columnId } = req.body;
            const boardId = req.params.id
        const task = await taskService.createTask(title,
            order,
            description,
            userId,
            boardId,
            columnId);
        reply.code(201);
        reply.send(task);
    })

    app.delete('/:taskid', async (req, reply: FastifyReply) => {
        const { taskid } = req.params;
        await taskService.deleteTaskById(taskid);
        reply.code(204);
        reply.send();
    })

    app.put('/:taskid', async (req, reply: FastifyReply) => {
        const { taskid } = req.params;
        const { title,
            order,
            description,
            userId,
            boardId,
            columnId } = req.body;
        const task = await taskService.updateTaskById(taskid, title,
            order,
            description,
            userId,
            boardId,
            columnId);
        reply.code(200);
        reply.send(task);
    })

    done()
}
