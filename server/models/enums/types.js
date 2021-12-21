import { gql } from 'apollo-server-express';

const typesEnums = gql`
  enum Enum_StateUser {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_StateProject {
    ACTIVO
    INACTIVO
  }

  enum Enum_PhaseProject {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_TypeObjective {
    GENERAL
    ESPECIFICO
  }

  enum Enum_StateInscription {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }
`;

export { typesEnums };
