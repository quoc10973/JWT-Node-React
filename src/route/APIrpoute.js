import express from 'express';
import userController from '../controllers/userController';
import delay from '../middleware/delay';
import jwtAuth from '../middleware/jwtAuth';

let router = express.Router();

router.all('*', jwtAuth()); // apply delay to all routes

let initWebRoutes = (app) => {
    router.get("/api", (req, res) => {
        return res.status(200).json("hello world api");
    }
    );

    router.post("/api/register", userController.createUsser);

    router.post("/api/login", userController.checkLogin);

    router.get("/api/users", userController.getAllUsers);

    router.get("/api/account", delay(), userController.getAccount);

    return app.use("/", router);
}

module.exports = initWebRoutes; 