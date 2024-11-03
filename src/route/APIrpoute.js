import express from 'express';
import userController from '../controllers/userController';

let router = express.Router();


let initWebRoutes = (app) => {
    router.get("/api", (req, res) => {
        return res.status(200).json("hello world api");
    }
    );

    router.post("/register", userController.createUsser);


    return app.use("/", router);
}

module.exports = initWebRoutes; 