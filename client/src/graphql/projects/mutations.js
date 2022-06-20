import { gql } from '@apollo/client';

const EDITAR_PROYECTO = gql`
  mutation Mutation($_id: String!, $campos: camposProyecto!) {
    editarProyecto(_id: $_id, campos: $campos) {
      _id
      estado
    }
  }
`;

const CREAR_PROYECTO = gql`
  mutation CrearProyecto(
    $name: String!
    $budget: Float!
    $startDate: Date!
    $finalDate: Date!
    $leader: String!
    $objectives: [createObjective]
  ) {
    crearProyecto(
      name: $name
      budget: $budget
      startDate: $startDate
      finalDate: $finalDate
      leader: $leader
      objectives: $objectives
    ) {
      _id
    }
  }
`;

const EDITAR_OBJETIVO = gql`
  mutation EditarObjetivo(
    $idProyecto: String!
    $indexObjetivo: Int!
    $campos: camposObjetivo!
  ) {
    editarObjetivo(
      idProyecto: $idProyecto
      indexObjetivo: $indexObjetivo
      campos: $campos
    ) {
      _id
    }
  }
`;

const ELIMINAR_OBJETIVO = gql`
  mutation Mutation($idProyecto: String!, $idObjetivo: String!) {
    eliminarObjetivo(idProyecto: $idProyecto, idObjetivo: $idObjetivo) {
      _id
    }
  }
`;

export { EDITAR_PROYECTO, CREAR_PROYECTO, ELIMINAR_OBJETIVO, EDITAR_OBJETIVO };
