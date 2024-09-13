const convertToCelsius = function(far) {

  let temp;
  temp = ((far - 32) * 5/9).toFixed(1)
  let celTemp = Math.round(temp * 10) / 10
  return celTemp

};

const convertToFahrenheit = function(cel) {
  let temp;
  temp = (cel * 9/5 + 32)
  let farTemp = Math.round(temp * 10) / 10
  return farTemp

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
