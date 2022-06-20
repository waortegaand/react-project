import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// import { Enum_TipoObjetivo } from './enums/enums.js';
// import { ProjectModel } from './proyecto/proyecto.js';

// interface Objective {
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
// }

const objectiveSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  types: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
});

const ObjectiveModel = model('Objetivo', objectiveSchema);

export { ObjectiveModel };
