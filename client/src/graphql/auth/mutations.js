import { gql } from '@apollo/client';

const REGISTRO = gql`
  mutation Registro(
    $name: String!
    $lastname: String!
    $identification: String!
    $email: String!
    $rol: Enum_Rol!
    $password: String!
  ) {
    registro(
      name: $name
      lastname: $lastname
      identification: $identification
      email: $email
      rol: $rol
      password: $password
    ) {
        token
        error
      }
  }
`;

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      error
    }
  }
`;

export { REGISTRO, LOGIN, REFRESH_TOKEN };
/*
export { REGISTRO, LOGIN };

*/
