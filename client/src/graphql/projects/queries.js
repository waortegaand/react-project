import { gql } from '@apollo/client';

const PROYECTOS = gql`
  query Proyectos {
    Proyectos {
      _id
      name
      state
      objectives {
        _id
        description
        types
      }
      leader {
        _id
        email
      }
      enrollment {
        state
        student {
          _id
        }
      }
    }
  }
`;

export { PROYECTOS };
