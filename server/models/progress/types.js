import { gql } from 'apollo-server-express';

const typesProgress = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Project!
    creadoPor: Usuario!
  }

  type Query {
    Avances(project: String): [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
  }
`;

export { typesProgress };
