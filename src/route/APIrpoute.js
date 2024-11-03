import express from 'express';


let router = express.Router();


let initWebRoutes = (app) => {
    router.get("/api", (req, res) => {
        return res.status(200).json("hello world api");
    }
    );

    return app.use("/", router);
}

module.exports = initWebRoutes; 