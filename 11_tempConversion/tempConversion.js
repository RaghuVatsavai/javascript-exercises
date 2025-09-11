const convertToCelsius = function(fahren) {
  let celsius = (fahren - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahren = (celsius * 9 / 5) + 32;
  return Math.round(fahren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
