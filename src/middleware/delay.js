import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const delay = (ms = 3000) => {
    return (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).json('Unauthorized');
        }
        try {
            const getToken = req.headers.authorization.split(' ')[1];
            const verifyToken = jwt.verify(getToken, process.env.JWT_SECRET);
            let decodedToken = jwt.decode(getToken);
            setTimeout(next, ms); // 3 seconds delay then next let the request continue.
            console.log(`${verifyToken}`);
            console.log(decodedToken);
        }
        catch (err) {
            return res.status(401).json('Unauthorized');
        };
    }
}
module.exports = delay;