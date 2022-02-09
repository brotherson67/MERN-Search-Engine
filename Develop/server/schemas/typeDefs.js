// Imports
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book: {
        _id: ID
        authors: String
        
    }

    type Query: {
        books: [Book]
    }
`;
