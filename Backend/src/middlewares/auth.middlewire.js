const jwt = require('jsonwebtoken');

async function identifyUser(req,res,next){
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message:'Invalid token'
        })
    }
     let decoded;
    try {
       decoded = await jwt.verify(token,process.env.Jwt_Secret);
    } catch (err) {
         return res.status(401).json({
            message:'User not found'
         })
    }
    req.user = decoded;

    next();

}

module.exports = identifyUser;

