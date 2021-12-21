import { gql } from 'apollo-server-express';

const typesUser = gql`
  type Usuario {
    _id: ID!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    rol: Enum_Rol!
    state: Enum_StateUser
    photo: String
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Project]
  }

  input FiltroUsuarios {
    _id: ID
    identification: String
    email: String
    rol: Enum_Rol
    state: Enum_StateUser
  }

  input CamposEditarPerfil {
    name: String
    lastname: String
    identification: String
    photo: String
  }

  type Query {
    Usuarios(filtro: FiltroUsuarios): [Usuario]
    Usuario(_id: String!): Usuario
  }

  type Mutation {
    crearUsuario(
      name: String!
      lastname: String!
      identification: String!
      email: String!
      rol: Enum_Rol!
      state: Enum_StateUser
      password: String!
    ): Usuario

    editarUsuario(
      _id: String!
      name: String!
      lastname: String!
      identification: String!
      email: String!
      state: Enum_StateUser!
    ): Usuario

    editarPerfil(_id: String!, fields: CamposEditarPerfil!): Usuario

    eliminarUsuario(_id: String, email: String): Usuario
  }
`;

export { typesUser };
