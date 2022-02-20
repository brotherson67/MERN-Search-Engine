const { Book, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("You need to be logged in");
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
