import { gql } from '@apollo/client';

const CREAR_INSCRIPCION = gql`
  mutation CrearInscripcion($project: String!, $student: String!) {
    crearInscripcion(proyecto: $project, estudiante: $student) {
      _id
    }
  }
`;

const APROBAR_INSCRIPCION = gql`
  mutation AprobarInscripcion($aprobarInscripcionId: String!) {
    aprobarInscripcion(id: $aprobarInscripcionId) {
      _id
    }
  }
`;

export { CREAR_INSCRIPCION, APROBAR_INSCRIPCION };
