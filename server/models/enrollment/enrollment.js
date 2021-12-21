import mongoose from 'mongoose';
// import { Enum_EstadoInscripcion } from '../enums/enums.js';
import { ProjectModel } from '../projects/projects.js';
import { UserModel } from '../user/users.js';

const { Schema, model } = mongoose;
// interface Inscription {
//   estado: Enum_EstadoInscripcion;
//   fechaIngreso: Date;
//   fechaEgreso: Date;
//   proyecto: Schema.Types.ObjectId;
//   estudiante: Schema.Types.ObjectId;
// }

const enrollmentSchema = new Schema({
  state: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  inDate: {
    type: Date,
    required: false,
  },
  outDate: {
    type: Date,
    required: false,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const EnrollmentModel = model('Inscripcion', enrollmentSchema);

export { EnrollmentModel };
