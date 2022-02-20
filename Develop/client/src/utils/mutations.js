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

export const CREATE_USER = gql``;

export const SAVE_BOOK = gql``;

export const DELETE_BOOK = gql``;
