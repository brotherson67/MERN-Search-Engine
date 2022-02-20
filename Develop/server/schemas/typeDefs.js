// Imports
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book: {
        _id: ID!
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User: {
        __id: ID!
        username: String
        email: String
        savedBooks: [Book]
        bookcount: Int
    }

    type Query: {
        getUser(user: ID!): User
        books: [Book]
    }

    type Mutation: {
        login
        createUser
        saveBook
        deleteBook
    }
`;

module.exports = typeDefs;
