const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    getUser: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
  },
  Mutation: {
    login: {},
    createUser: {},
    saveBook: {},
    deleteBook: {},
  },
};

module.exports = resolvers;
