import { gql } from 'apollo-server-express';

const typesEnrollment = gql`
  type Inscripcion {
    _id: ID!
    state: Enum_StateInscription!
    inDate: Date
    outDate: Date
    project(leader: String): Project
    student: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(proyecto: String!, estudiante: String!): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  }
`;

export { typesEnrollment };
