"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const User = require('./user.model');
const user_service_1 = __importDefault(require("./user.service"));
const task_memory_repository_1 = __importDefault(require("../tasks/task.memory.repository"));
function userRoutes(app, options, done) {
    app.get('/', async (req, reply) => {
        const users = await user_service_1.default.getAll();
        reply.send(users.map(user_service_1.default.toResponse));
    });
    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const user = await user_service_1.default.getById(id);
        reply.code(200);
        reply.send(User.toResponse(user));
    });
    app.post('/', async (req, reply) => {
        const { name, login, password } = req.body;
        const user = await user_service_1.default.create(name, login, password);
        reply.code(201);
        reply.send(User.toResponse(user));
    });
    app.delete('/:id', async (req, reply) => {
        const { id } = req.params;
        await user_service_1.default.deleteById(id);
        task_memory_repository_1.default.updateUserIdToNull(id, null);
        reply.code(204);
        reply.send();
    });
    app.put('/:id', async (req, reply) => {
        const { id } = req.params;
        const { name, login, password } = req.body;
        const user = await user_service_1.default.updateById(id, name, login, password);
        reply.code(200);
        reply.send(User.toResponse(user));
    });
    done();
}
exports.default = userRoutes;
//# sourceMappingURL=user.router.js.map