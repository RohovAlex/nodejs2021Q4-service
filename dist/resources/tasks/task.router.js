"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = __importDefault(require("./task.service"));
async function taskRoutes(app, options, done) {
    app.get('/', async (req, reply) => {
        const tasks = await task_service_1.default.getAllTasks();
        reply.send(tasks);
    });
    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const task = await task_service_1.default.getTaskById(id);
        if (task) {
            reply.code(200);
            reply.send(task);
        }
        else {
            reply.code(404);
            reply.send();
        }
    });
    app.post('/', async (req, reply) => {
        const { title, order, description, userId, columnId } = req.body;
        const boardId = req.params.id;
        const task = await task_service_1.default.createTask(title, order, description, userId, boardId, columnId);
        reply.code(201);
        reply.send(task);
    });
    app.delete('/:taskid', async (req, reply) => {
        const { taskid } = req.params;
        await task_service_1.default.deleteTaskById(taskid);
        reply.code(204);
        reply.send();
    });
    app.put('/:taskid', async (req, reply) => {
        const { taskid } = req.params;
        const { title, order, description, userId, boardId, columnId } = req.body;
        const task = await task_service_1.default.updateTaskById(taskid, title, order, description, userId, boardId, columnId);
        reply.code(200);
        reply.send(task);
    });
    done();
}
exports.default = taskRoutes;
//# sourceMappingURL=task.router.js.map