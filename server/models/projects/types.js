import {gql} from 'apollo-server-express';

const typesProjects = gql`
    scalar Date

    type Objective{
        _id: ID!
        description: String!
        types: Enum_TypeObjective!
    },

    input createObjective{
        description: String!
        types: Enum_TypeObjective!
    }
    input fieldObjective {
        description: String!
        types: Enum_TypeObjective!
    }
    input fieldProject {
        name: String
        budget: Float
        startDate: Date
        finalDate: Date
        state: Enum_StateProject
        phase: Enum_PhaseProject
        leader: String
    }

    type Project{
        _id: ID!
        name: String!
        budget: Float!
        startDate: Date!
        finalDate: Date!
        state: Enum_StateProject!
        phase: Enum_PhaseProject!
        leader: Usuario!
        objectives: [Objective]
        avances: [Avance]
        inscripciones: [Inscripcion]
    },

    type Query {
        Projects: [Project]
    }

    type Mutation {
        createProject(
            name: String!
            budget: Float!
            startDate: Date!
            finalDate: Date!
            state: Enum_StateProject!
            phase: Enum_PhaseProject!
            leader: String!
            objectives: [createObjective]
        ): Project

        editProject(_id: String!, fields: fieldProject!):Project
        createObjective(idProject: String!, fields: fieldObjective!):Project
        editObjective(idProject: String!, indexObjectives: Int!, fields: fieldObjective!):Project
        deleteObjective(idProject: String!, idObjective: String!):Project
    }
`;

export { typesProjects };
