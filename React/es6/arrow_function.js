// js
function add(first, second) {
  return first + second;
}
// typeof add === 'function'
var add = function (first, second) {
  // anonymous function(익명함수)
  return first + second;
};
// typeof add === 'function'

// ES6
var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second;

var add = (first, second) => ({
  add: first + second,
  multiply: first * second,
});

// js
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

// ES6
var addNumber = (num) => (value) => num + value;
