import express from 'express';
import userController from '../controllers/userController';

let router = express.Router();


let initWebRoutes = (app) => {
    router.get("/api", (req, res) => {
        return res.status(200).json("hello world api");
    }
    );

    router.post("/api/register", userController.createUsser);

    router.post("/api/login", userController.checkLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes; 