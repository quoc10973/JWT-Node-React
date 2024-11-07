import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtAuth = (ms = 3000) => {
    const publicAPI = ["/", "/api/login", "/api/register"];
    return (req, res, next) => {
        //object? optional chaining chạy code mà kh gây ra lỗi có giá trị thì tiếp, không thì undefined
        if (req?.headers?.authorization?.split(' ')?.[1]) {
            try {
                const getToken = req.headers.authorization.split(' ')[1];
                const verifyToken = jwt.verify(getToken, process.env.JWT_SECRET); //verify kiểm tra token có hợp lệ không, nếu hợp lệ trả về data 
                let decodedToken = jwt.decode(getToken);  //decode giải mã token không cần secret và tính hợp lệ, chỉ lấy data
                console.log(verifyToken);
                console.log("-------------------");
                console.log(decodedToken);
                next();
            }
            catch (err) {
                console.log(err);
                if (err.message.includes('malformed')) {
                    return res.status(401).json('Incorrect Token Format');
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