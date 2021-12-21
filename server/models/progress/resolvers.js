import { ProjectModel } from '../projects/projects.js';
import { ProgressModel } from './progress.js';

const resolversProgress = {
  Query: {
    Avances: async (parent, args) => {
      let filter = {};
      if (args.project) {
        filter = { ...args };
      }
      const avances = await ProgressModel.find(filter).populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ProgressModel.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = await ProgressModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });

      const avances = await ProgressModel.find({ proyecto: avanceCreado.proyecto });

      if (avances.length === 1) {
        const proyectoModificado = await ProjectModel.findOneAndUpdate(
          { _id: avanceCreado.proyecto },
          {
            fase: 'DESARROLLO',
          }
        );
        console.log('proy modificado', proyectoModificado);
      }

      return avanceCreado;
    },
  },
};

export { resolversProgress };
