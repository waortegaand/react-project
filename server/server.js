import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectDB from './db/database.js';
import { tipos } from './gql/types.js';
import { resolvers } from './gql/resolvers.js';
import { validateToken } from './utils/tokenUtils.js';

dotenv.config();

//const main = async() => {
//  await conectDB();
//};
const getUserData = (token) => {
  const verificacion = validateToken(token.split('')[1]);
  if (verificacion.data) {
    return verificacion.data;
  } else {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs : tipos,
  resolvers: resolvers,
  context  : async({req,res}) => {
    //const token = req.headers?.authorization ?? null;
    // VERIFICAR LAS SIGUIENTES LINEAS DE CODIGO
    const token = req.headers.authorization;
    if (token) {
      const userData = getUserData(token);
      console.log('user data', userData);
      if (userData) {
        return { userData };
      }
    }
    return null;
  }
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen({port:process.env.PORT || 4000}, async ()=> {
  await conectDB();
  await server.start();
  server.applyMiddleware({ app });
  console.log('Servidor configurado');
});

//main();
