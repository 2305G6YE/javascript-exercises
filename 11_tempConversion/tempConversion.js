const convertToCelsius = function(temp) {
let convertedC = ((temp - 32) * ( 5 / 9));
return (Math.round(convertedC * 10) / 10);
};

const convertToFahrenheit = function(temp) {
let convertedF = (temp * (9 / 5) + 32);
return (Math.round(convertedF * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
