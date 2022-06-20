import { gql } from 'apollo-server-express';

const typesAuth = gql`
  type Token {
    token: String
    error: String
  }

  type Mutation {
    registro(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      rol: Enum_Rol!
      state: Enum_StateUser
      password: String!
    ): Token!

    login(email: String!, password: String!): Token

    refreshToken: Token
  }
`;

export { typesAuth };
