const palindromes = function (input) {
let lowerCase = input.toLowerCase();
let withoutPunc = lowerCase.replace (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
let finalString = withoutPunc.replace((/\s{2,}/g," "));
let arr = Array.from(finalString);
let reverseArr = arr.reverse();
if (arr = reverseArr) {
    return true;
} else {
    return false;
}

// Do not edit below this line
module.exports = palindromes;
