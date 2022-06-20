import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
      message: 'El formato del correo electrónico es incorrecto.',
      },
  },
  password: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  rol: {
    type: String,
    required: true,
    enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
  },
  state: {
    type: String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
    default: 'PENDIENTE',
  },
});


userSchema.virtual('proyectosLiderados', {
  ref: 'Proyecto',
  localField: '_id',
  foreignField: 'leader',
});

userSchema.virtual('avancesCreados', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'creadoPor',
});

userSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'estudiante',
});

const UserModel = model('User',userSchema);
export { UserModel }
