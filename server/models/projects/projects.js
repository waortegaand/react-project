import mongoose from 'mongoose';

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
    enum: ['Activo','Inactivo'],
    default: 'Inactivo',
  },
  phase:{
    type: String,
    enum: ['Iniciado','Desarrollo','Terminado','Nulo'],
    default: 'Nulo',
  },
  leader: {
    type: String,
    required: true,
  },
  
});

const ProjectModel = model('Proyecto',projectSchema);
export { ProjectModel };
