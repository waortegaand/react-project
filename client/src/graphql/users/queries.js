import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query Query($filtro: FiltroUsuarios) {
    Usuarios(filtro: $filtro) {
      _id
      name
      lastname
      email
      state
      identification
      rol
    }
  }
`;

const GET_USUARIO = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      name
      lastname
      email
      state
      identification
      rol
      photo
    }
  }
`;

export { GET_USUARIOS, GET_USUARIO };
