import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
  mutation Mutation(
    $date: Date!
    $description: String!
    $project: String!
    $createdBy: String!
  ) {
    crearAvance(
      date: $date
      description: $description
      project: $project
      createdBy: $createdBy
    ) {
      _id
    }
  }
`;

const CREAR_OBSERVACION = gql`
  mutation Mutation($_id: String!, $observacion: String!) {
    crearObservacion(_id: $_id, observacion: $observacion) {
      _id
      observaciones
    }
  }
`;

export { CREAR_AVANCE, CREAR_OBSERVACION };
