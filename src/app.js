const fastify = require('fastify');
const userRouter = require('./resources/users/user.router');

const app = fastify({ logger: true});

app.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'task4 Rest-server'}
    }
})

app.register(userRouter, {prefix: '/users'});

module.exports = app;
