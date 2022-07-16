export const data = { users: [] };

export const userService = {
  findAll() {
    return data.users;
  },

  create(user) {
    data.users.push(user);
  },

  destroy(id) {
    data.users = data.users.filter((user) => user.id !== id);
  },

  update(id, newUser) {
    data.users = data.users.map((user) => (user.id === id ? newUser : user));
  },

  clear() {
    data.users = [];
  },
};
