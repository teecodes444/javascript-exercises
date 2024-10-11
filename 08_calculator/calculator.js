const add = function (a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	/* let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total */

  return array.reduce((a, i) => a + i, 0)
};

const multiply = function(array) {
  return array.reduce((a, i) => a * i, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i
  }
  return product;
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
