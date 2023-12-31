const jwt = require('jsonwebtoken');

const generateToken = async(payload)=>{
    return await jwt.sign(payload,"66536378382262678388JRHBY6")
}

module.exports = {generateToken}