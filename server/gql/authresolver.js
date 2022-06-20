import { UserModel } from '../models/user/users.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/tokenUtils.js';

const resolversAuth = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioCreado = await UserModel.create({
        name: args.name,
        lastname: args.lastname,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
        password: hashedPassword,
      });
      console.log('usuario creado', usuarioCreado);
      return {
        token: generateToken({
          _id: usuarioCreado._id,
          name: usuarioCreado.name,
          lastname: usuarioCreado.lastname,
          identification: usuarioCreado.identification,
          email: usuarioCreado.email,
          rol: usuarioCreado.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEncontrado = await UserModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.password, usuarioEncontrado.password)) {
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            name: usuarioEncontrado.name,
            lastname: usuarioEncontrado.lastname,
            identification: usuarioEncontrado.identification,
            email: usuarioEncontrado.email,
            rol: usuarioEncontrado.rol,
            photo: usuarioEncontrado.photo,
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log('contexto', context);
      if (!context.userData) {
        return {
          error: 'token no valido',
        };
      } else {
        return {
          token: generateToken({
            _id: context.userData._id,
            name: context.userData.name,
            lastname: context.userData.lastname,
            identification: context.userData.identification,
            email: context.userData.email,
            rol: context.userData.rol,
            photo: context.userData.photo,
          }),
        };
      }
      // valdiar que el contexto tenga info del usuario. si si, refrescar el token
      // si no devolver null para que en el front redirija al login.
    },
  },
};

export { resolversAuth };
