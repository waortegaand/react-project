import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/types.js';
import { typesProjects } from '../models/projects/types.js';
import { typesUser } from '../models/user/types.js';
import { typesProgress } from '../models/progress/types.js';
import { typesEnrollment } from '../models/enrollment/types.js';
import { typesAuth } from './authtypes.js';

const globalTypes = gql`
  scalar Date
`;

export const tipos = [
  globalTypes,
  typesEnums,
  typesProjects,
  typesUser,
  typesProgress,
  typesEnrollment,
  typesAuth,
];

