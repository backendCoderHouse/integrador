import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://cristianrios:CoderHouse2023@coderhouse.z6tbriz.mongodb.net/?retryWrites=true&w=majority`,{
    dbName: 'integrador', 
  });



const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

export default  db;