

const randomKey = ()=>{
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let uniqueKey = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueKey += characters.charAt(randomIndex);
    }
    return uniqueKey;
}

const generateOtp = ()=>{
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

module.exports = {randomKey,generateOtp}