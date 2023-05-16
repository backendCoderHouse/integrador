import usersModel from '../models/users.js';



class UserManager {


    constructor() {

    }

    async createUser(user) {

        let result = await usersModel.create(user);

        return result
    }

    async getUsers() {
        try {
            const users = await usersModel.find({}).lean();
            return  users ;
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            throw error;
        }
    }

}

export default UserManager;
