"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let users = [];
class User {
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.default = User;
_a = User;
User.getAll = async () => users;
User.getById = async (id) => users.find((user) => user.id === id);
User.create = async (name, login, password) => {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name, login, password
    };
    users.push(newUser);
    return newUser;
};
User.deleteById = async (id) => {
    users = users.filter((user) => user.id !== id);
};
User.updateById = async (id, name, login, password) => {
    users = users.map((user) => user.id === id ? { id, name, login, password } : user);
    const updatedUser = await getById(id);
    return updatedUser;
};
//# sourceMappingURL=user.memory.repository.js.map