const taskService = require('./task.service');

function taskRoutes(app, options, done) {

    app.get('/', async (req, reply) => {
        const tasks = await taskService.getAll();
        reply.send(tasks);
    })

    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const task = await taskService.getById(id);
        reply.code(200);
        reply.send(task);
    })

    app.post('/', async (req, reply) => {
        const { title,
        order,
        description,
        userId,
        boardId,
        columnId } = req.body;
        const task = await taskService.create(title,
            order,
            description,
            userId,
            boardId,
            columnId);
        reply.code(201);
        reply.send(task);
    })

    app.delete('/:id', async (req, reply) => {
        const { id } = req.params;
        await taskService.deleteById(id);
        reply.code(204);
        reply.send();
    })

    app.put('/:id', async (req, reply) => {
        const { id } = req.params;
        const { title, columns } = req.body;
        const task = await taskService.updateById(id, title, columns);
        reply.code(200);
        reply.send(task);
    })

    done()
}

module.exports = taskRoutes;
