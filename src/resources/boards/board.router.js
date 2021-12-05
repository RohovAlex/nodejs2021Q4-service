const boardService = require('./board.service');

function boardRoutes(app, options, done) {

    app.get('/', async (req, reply) => {
        const boards = await boardService.getAll();
        reply.send(boards);
    })

    app.get('/:id', async (req, reply) => {
        const { id } = req.params;
        const board = await boardService.getById(id);
        reply.code(200);
        reply.send(board);
    })

    app.post('/', async (req, reply) => {
        const { title, columns } = req.body;
        const board = await boardService.create(title, columns);
        reply.code(201);
        reply.send(board);
    })

    app.delete('/:id', async (req, reply) => {
        const { id } = req.params;
        await boardService.deleteById(id);
        reply.code(204);
        reply.send();
    })

    app.put('/:id', async (req, reply) => {
        const { id } = req.params;
        const { title, columns } = req.body;
        const board = await boardService.updateById(id, title, columns);
        reply.code(200);
        reply.send(board);
    })

    done()
}

module.exports = boardRoutes;
