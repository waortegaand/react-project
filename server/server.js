import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectDB from './db/database.js';

dotenv.config();

const main = async() => {
  await conectDB();
};

const app = express();
app.use(express.json());
app.use(cors());

app.listen({port:process.env.PORT || 3000}, async ()=> {
  await conectDB();
  //await server.start();
  //server.applyMiddleware({ app });
  console.log('Servidor configurado');
});

//main();
