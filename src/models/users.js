import mongoose from 'mongoose';

import db from './db.js';

import multer from 'multer';

import path from 'path';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    },
});

const upload = multer({ storage });

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
        const uploadFile = upload.single('profilePicture');
        await uploadFile(req, null, async (err) => {
            if (err) {
                console.error('Error al cargar el archivo:', err);
                throw err;
            } else {
                user.ProfilePicture = req.file.path;
                const newUser = new this(user);
                const result = await newUser.save();
                return result;
            }
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};




const usersModel = db.model(collection, schema);

export default usersModel;
