const taskService = require('./task.service');

function taskRoutes(app, options, done) {

    app.get('/', async (req, reply) => {
        const tasks = await taskService.getAll();
        reply.send(tasks);
    })

    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const task = await taskService.getById(id);
        if(task) {
            reply.code(200);
            reply.send(task);
        } else {
            reply.code(404);
            reply.send();
        }
    })

    app.post('/', async (req, reply) => {
        const { 
            title,
            order,
            description,
            userId,
            columnId } = req.body;
            const boardId = req.params.id
        const task = await taskService.create(title,
            order,
            description,
            userId,
            boardId,
            columnId);
        reply.code(201);
        reply.send(task);
    })

    app.delete('/:taskid', async (req, reply) => {
        const { taskid } = req.params;
        await taskService.deleteById(taskid);
        reply.code(204);
        reply.send();
    })

    app.put('/:taskid', async (req, reply) => {
        const { taskid } = req.params;
        const { title,
            order,
            description,
            userId,
            boardId,
            columnId } = req.body;
        const task = await taskService.updateById(taskid, title,
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

module.exports = taskRoutes;
