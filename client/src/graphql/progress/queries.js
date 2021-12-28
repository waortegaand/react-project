import { gql } from '@apollo/client';

const GET_AVANCES = gql`
  query Avances($project: String) {
    Avances(project: $project) {
      _id
      description
      date
      observaciones
      project {
        name
      }
    }
  }
`;

export { GET_AVANCES };
