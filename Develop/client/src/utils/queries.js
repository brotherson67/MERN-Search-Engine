import gql from "@apollo/client";

const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        authors
        bookId
        link
        image
        description
      }
    }
  }
`;

export default QUERY_ME;
