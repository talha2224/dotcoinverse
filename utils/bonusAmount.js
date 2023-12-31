const getUserLevel = (userCredit, level) => {
    switch (level) {
        case 1:
            return giftAmount(userCredit, 10);
        case 2:
            return giftAmount(userCredit, 5);
        case 3:
            return giftAmount(userCredit, 3);
        case 4:
            return giftAmount(userCredit, 2);
        case 5:
            return giftAmount(userCredit, 2);
        case 6:
            return giftAmount(userCredit, 1);
        case 7:
            return giftAmount(userCredit, 1);
        case 8:
            return giftAmount(userCredit, 1);
        case 9:
            return giftAmount(userCredit, 1);
        case 10:
            return giftAmount(userCredit, 2);
        default:
            return giftAmount(userCredit, 0);
    }
};

const giftAmount=(userCredit, percentage)=> {
    console.log('giftAmount input:', userCredit, percentage);
    const amount = (userCredit * percentage) / 100;
    return amount;
}

const getBonusPercentage = (level)=>{
    switch (level) {
        case 1:
            return 10;
        case 2:
            return 5;
        case 3:
            return 3;
        case 4:
            return 2;
        case 5:
            return 2;
        case 6:
            return 1;
        case 7:
            return 1;
        case 8:
            return 1;
        case 9:
            return 1;
        case 10:
            return 2;
        default:
            return 0;
    }
}


module.exports ={getUserLevel,giftAmount,getBonusPercentage}