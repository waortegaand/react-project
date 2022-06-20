import mongoose from 'mongoose';
import { ObjectiveModel } from '../objectives/objectives.js';
import { UserModel } from '../user/users.js';

const {Schema, model} = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  budget:{
    type: Number,
    required: true,
  },
  startDate:{
    type: Date,
    required: true,
  },
  finalDate:{
    type: Date,
    required: true,
  },
  state:{
    type: String,
    enum: ['ACTIVO','INACTIVO'],
    default: 'INACTIVO',
  },
  phase:{
    type: String,
    enum: ['INICIADO','DESARROLLO','TERMINADO',''],
    default: '',
  },
  leader: {
    type: String,
    required: true,
    ref: UserModel,
  },
  objectives: [
    {
      description:{
        type: String,
        required: true,
      },
      types:{
        type: String,
        enum: ['GENERAL','ESPECIFICO'],
        required: true,
      }
    }
  ],
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
}
);


projectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectModel = model('Proyecto',projectSchema);
export { ProjectModel };
