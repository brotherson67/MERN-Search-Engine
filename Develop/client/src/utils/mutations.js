import gql from "@apollo/client";

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: Strng!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password; String!) { 
    createUserO(username: $username, email: $email, password: $password){
        token
        user {
            _id 
            email
            username
        }
    }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
      username
      _id
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
