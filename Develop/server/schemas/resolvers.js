const { Book, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args) => {
      const userData = await User.findOne({})
        .select("-__v -password")
        .populate("savedBooks");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }
      const correctPW = await user.isCorectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { user, token };
    },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    saveBook: async () => {},
    deleteBook: async () => {},
  },
};

module.exports = resolvers;
