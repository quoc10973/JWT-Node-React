import express from 'express';
import bodyParser from 'body-parser'; //lấy các tham số từ client gửi //user?id=7 => body-parser giúp lấy số 7
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/APIrpoute';
import connectDB from './config/connectDB';
import db from './models/index';
const cors = require('cors');
require('dotenv').config(); //dùng để đọc file env


let app = express();
app.use(cors());

//config app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//port == undefined => port = 6969


app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});

