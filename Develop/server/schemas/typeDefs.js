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

    type Auth: {
        token: ID!
        user: User
    }

    type Query: {
        me: User

    }

    type Mutation: {
        login(email: String!, password: String!): Auth
        createUser(email: String!, username: String!, password: String!): Auth
        saveBook()
        deleteBook(bookId: String!): User
    }
`;

module.exports = typeDefs;
