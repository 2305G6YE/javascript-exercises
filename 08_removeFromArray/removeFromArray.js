/*
const removeFromArray = function(arr, ...args) {
const newArray = [];
array.forEach((item) => {
    if (!args.includes(item)) {
        newArray.push(item);
    }
});
return newArray; */

const removeFromArray = function(arr, ...args) {
    return arr.filter((item) => !args.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
