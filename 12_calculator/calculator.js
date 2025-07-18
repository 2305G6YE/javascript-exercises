const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  let arr = Array.from(numbers);
  return arr.reduce((prev,next) => prev + next, 0);
};

const multiply = function(numbers) {
  let arr = Array.from(numbers);
  return arr.reduce((prev,next) => prev * next, 1); 
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
 let arr = [];
 while (number > 0) {
  arr.push(number);
  number--;
 }
  if (number === 0 && arr.length === 1) {
    return 1;
  } else
      return arr.reduce((prev,next) => prev * next, 1)
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
