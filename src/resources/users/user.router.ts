// const User = require('./user.model');
const usersService = require('./user.service');
const taskRepo = require('../tasks/task.memory.repository');

function userRoutes(app, options, done) {

    app.get('/', async (req, reply) => {
        const users = await usersService.getAll();
        reply.send(users.map(usersService.toResponse));
    })

    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const user = await usersService.getById(id);
        reply.code(200);
        reply.send(User.toResponse(user));
    })

    app.post('/', async (req, reply) => {
        const { name, login, password } = req.body;
        const user = await usersService.create(name, login, password);
        reply.code(201);
        reply.send(User.toResponse(user));
    })

    app.delete('/:id', async (req, reply) => {
        const { id } = req.params;
        await usersService.deleteById(id);
        taskRepo.updateUserIdToNull(id, null);
        // const tasks4DeletedUser = tasks.filter((task) => task.userId === id);
        // for await(const task of tasks4DeletedUser) {
        //     task.userId = null;
        //     taskService.updateById(task.id, 
        //         task.title,
        //         task.order,
        //         task.description,
        //         task.userId,
        //         task.boardId,
        //         task.columnId)
        // }
        reply.code(204);
        reply.send();
    })

    app.put('/:id', async (req, reply) => {
        const { id } = req.params;
        const { name, login, password } = req.body;
        const user = await usersService.updateById(id, name, login, password);
        reply.code(200);
        reply.send(User.toResponse(user));
    })

    done()
}

module.exports = userRoutes;
