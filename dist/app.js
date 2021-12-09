"use strict";
const fastify = require('fastify');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const app = fastify({ logger: true });
app.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/doc',
    swagger: {
        info: { title: 'task4 Rest-server' }
    }
});
app.register(userRouter, { prefix: '/users' });
app.register(boardRouter, { prefix: '/boards' });
app.register(taskRouter, { prefix: '/boards/:id/tasks' });
module.exports = app;
//# sourceMappingURL=app.js.map