const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, obj) => { 
    return total+obj }, 0);
}

const multiply = function(arr) {
  if (arr.length<2){
    return;
  }
  else {
    return arr.reduce((total, obj) => {
      return total*obj });
  }
}

const power = function(base, powerTo) {
	return base**powerTo;
};

const factorial = function(n) {
  if (n===0){
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
