import express from "express";
const router = express.Router();

import userManager from "../controllers/users.js";



router.get("/users/register", (req, res) => { res.render('register') });




router.post('/users/register', (req, res) => {

    const { Name, Lastname, Age , ProfilePicture} = req.body;

    if (!Name || !Lastname || !Age || !ProfilePicture) return res.status(400).send({ error: "Incomplete values" });

    let user = {
        Name,
        Lastname,
        Age
    }

    const UserManager = new userManager();
    UserManager.createUser(user);
    res.status(200).send({ success: "User created" });
});

router.get('/users/list', async (req, res) => {
    try {
      const UserManager = new userManager();
      const users = await UserManager.getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
    }
  });
  
export default router;