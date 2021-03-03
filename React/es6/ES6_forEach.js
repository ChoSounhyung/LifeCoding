// js
function parse(qs) {
  var queryString = qs.substr(0); // queryString = 'banana=10&apple=20&orange=30'
  var chunks = qs.split("&");
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    var key = parts[0]; // 'banana'
    var value = parts[1]; // '10'
    result[key] = value; // {banana : '10'}
  }
  return result; //{banana: "10", apple: "20", orange: "30"}
}

// value를 숫자로 변환
function parse(qs) {
  var queryString = qs.substr(0); // queryString = 'banana=10&apple=20&orange=30'
  var chunks = qs.split("&");
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split("=");
    var key = parts[0]; // 'banana'
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); // 10
    result[key] = value; // {banana : '10'}
  }
  return result; //{banana: "10", apple: "20", orange: "30"}
}

// ES6 forEach()
function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split("&");
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split("=");
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });
  return result;
}

// more simply
function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split("&");
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split("="); // key = 'banana', value = '10'
    result[key] = value;
  });
  return result;
}
