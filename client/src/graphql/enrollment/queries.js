import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
  query Inscripciones {
    Inscripciones {
      _id
      state
      student {
        _id
        name
        lastname
        email
      }
      project {
        _id
        name
        leader {
          _id
        }
      }
    }
  }
`;

export { GET_INSCRIPCIONES };
