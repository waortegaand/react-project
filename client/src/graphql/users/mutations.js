import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
    $_id: String!
    $name: String!
    $lastname: String!
    $identification: String!
    $email: String!
    $state: Enum_StateUser!
  ) {
    editarUsuario(
      _id: $_id
      name: $name
      lastname: $lastname
      identification: $identification
      email: $email
      state: $state
    ) {
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

const EDITAR_PERFIL = gql`
  mutation EditarPerfil($_id: String!, $campos: CamposEditarPerfil!) {
    editarPerfil(_id: $_id, campos: $campos) {
      _id
      name
      lastname
      identification
      photo
    }
  }
`;

export { EDITAR_USUARIO, EDITAR_PERFIL };
