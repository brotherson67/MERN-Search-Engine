const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async (parent, args) => {
      Book.find();
    },
  },
  Mutation: {
    login: {},
    createUser: {},
    saveBook: {},
    deleteBook: {},
  },
};
