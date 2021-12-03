import mongoose from 'mongoose';

const conectDB = async() => {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(()=>{
      console.log('Conexion con exito a "react-db".');
    })
    .catch((e)=>{
      console.error('Error de conexion con "react-db".',e);
    });
};

export default conectDB;
