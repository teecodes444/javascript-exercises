const sumAll = function(arg1, arg2) {
    let sum = 0;
    let num1 = Number(arg1)
    let num2 = Number(arg2)
    for (let i = 1; i >= num1 && i <= num2; i++ ) {
        if (num1 > 0  && num2 > 0) {
            sum = sum + i;
        } else { 
            return 'ERROR'
        }
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
