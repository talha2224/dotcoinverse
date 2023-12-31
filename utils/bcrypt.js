const bcrypt = require('bcryptjs');


const HashPassword = async(password)=>{
    return await bcrypt.hash(password,10)
}

const MatchPassword = async(storedPassword,hashPassword)=>{
    return bcrypt.compare(storedPassword,hashPassword)
}

module.exports = {HashPassword,MatchPassword}