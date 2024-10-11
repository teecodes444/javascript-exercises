const palindromes = function (str) {
    let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    if (reverseStr === cleanStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
