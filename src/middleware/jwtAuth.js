import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtAuth = () => {
    const publicAPI = ["/", "/login", "/register"];

    return (req, res, next) => {
        // if (publicAPI.find(url => "/api" + url === req.originalUrl)) {
        //     return next(); cach 1
        // }
        if (publicAPI.includes(req.originalUrl.replace("/api", ""))) {
            return next(); //cach 2
        }
        //object? optional chaining chạy code mà kh gây ra lỗi có giá trị thì tiếp, không thì undefined
        if (req?.headers?.authorization?.split(' ')?.[1]) {
            try {
                const getToken = req.headers.authorization.split(' ')[1];
                const verifyToken = jwt.verify(getToken, process.env.JWT_SECRET); //verify kiểm tra token có hợp lệ không, nếu hợp lệ trả về data 
                let decodedToken = jwt.decode(getToken);  //decode giải mã token không cần secret và tính hợp lệ, chỉ lấy data
                // token từ FE đi vào middleware -> decoded sẽ có data rồi tạo biến user mới gán data vào request và cho next đi vào controller
                req.user = {
                    email: decodedToken.email,
                    name: decodedToken.name,
                    createBy: `Express server, at ${Date.now()}`,
                }
                next();
            }
            catch (err) {
                console.log(err);
                if (err.message.includes('malformed')) {
                    return res.status(401).json('Incorrect Token Format');
                }
                if (err.message.includes('expired')) {
                    return res.status(401).json('Token Expired');
                }
                return res.status(401).json('Unauthorized');
            };
        }
        else {
            return res.status(401).json('Unauthorized');
        }
    }
}
module.exports = jwtAuth;