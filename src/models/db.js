import mongoose from 'mongoose';

mongoose.connect(`<your mongo atlas connection uri>`,{
    dbName: 'integrador', 
  });



const db = mongoose.connection;


db.on('error', console.error.bind(console, 'Error to connect MongoDB:'));
db.once('open', () => {
  console.log('Connection succesfully to  MongoDB');
});

export default  db;
