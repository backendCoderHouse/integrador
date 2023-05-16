import mongoose from 'mongoose';

import db from './db.js';



const collection = 'users';

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Lastname: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },

    ProfilePicture: {
        type: String,
        required: true,
    },

});

schema.statics.createUser = async function (user, req) {
    try {

        const newUser = new this(user);
        const result = await newUser.save();
        return result;


    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};




const usersModel = db.model(collection, schema);

export default usersModel;
