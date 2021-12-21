import { resolverProject } from '../models/projects/resolvers.js';
import { resolversUser } from '../models/user/resolvers.js';
import { resolversProgress } from '../models/progress/resolvers.js';
import { resolversEnrollment } from '../models/enrollment/resolvers.js';
import { resolversAuth } from './authresolver.js';

export const resolvers = [
  resolverProject,
  resolversUser,
  resolversProgress,
  resolversEnrollment,
  resolversAuth,
];
