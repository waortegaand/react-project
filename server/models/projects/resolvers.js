import { EnrollmentModel } from '../enrollment/enrollment.js';
import { UserModel } from '../user/users.js';
import { ProjectModel } from './projects.js';

const resolverProject = {
    Project: {
      leader: async (parent, args, context) => {
        const usr = await UserModel.findOne({
          _id: parent.lider.toString(),
          //_id: parent.leader.toString(),
        });
        return usr;
      },
      inscripciones: async (parent, args, context) => {
        const inscripciones = await EnrollmentModel.find({
          project: parent._id,
        });
        return inscripciones;
      },
    },
    Query:{
        Projects: async (parent, args, context) => {
            const projects = await ProjectModel.find();
            return projects;
        }
    },
    Mutation: {
        createProject: async (parent, args, context) => {
            const projectCreated = await ProjectModel.create({
                name:       args.name,
                budget:     args.budget,
                startDate:  args.startDate,
                finalDate:  args.finalDate,
                state:      args.state,
                phase:      args.phase,
                leader:     args.leader,
                objectives: args.objectives,
            });
            return projectCreated;
        },
        editProject: async (parent, args) => {
            const projectEdited = await ProjectModel.findByIdAndUpdate(
                args._id,
                { ...args.fields },
                {new: true},
            );
            return projectEdited;
        },
        createObjective: async (parent, args) => {
            const projectWithObjective = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {
                    $addToSet:{
                        objectives:{ ...args.fields },
                    }
                },
                {new: true},
            );
            return projectWithObjective;
        },
        editObjective: async (parent, args) => {
            const objectiveEdited = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {
                    $set:{
                        [`objectives.${args.indexObjectives}.description`]:args.fields.description,
                        [`objectives.${args.indexObjectives}.types`]:args.fields.types,
                    }
                },
                {new: true},
            );
            return objectiveEdited;
        },
        deleteObjective: async (parent, args) => {
            const objectiveDeleted = await ProjectModel.findByIdAndUpdate(
                {_id:args.idProject},
                {
                    $pull:{
                        objectives:{
                            _id:args.idObjective,
                        }
                    }
                },
                {new: true},
            );
            return objectiveDeleted;
        }
    }
}

export {resolverProject};
