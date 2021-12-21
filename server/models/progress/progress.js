import mongoose from 'mongoose';
import { ProjectModel } from '../projects/projects.js';
import { UserModel } from '../user/users.js';

const { Schema, model } = mongoose;

const progresSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  observations: [
    {
      type: String,
    },
  ],
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const ProgressModel = model('Avance', progresSchema);

export { ProgressModel };
