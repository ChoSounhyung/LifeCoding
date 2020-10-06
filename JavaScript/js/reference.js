//복제
var a = 1;
var b = a;
b = 2;
console.log(a);

//참조
var a = {'id' : 1};
var b = a;
b.id = 2;
console.log(a.id);      // 2

var a = {'id' : 1};
var b = a;
b = {'id' : 2};
console.log(a.id);      // 1

// 변수에 담겨있는 값이 객체인 경우 새로운 변수에 객체가 담긴 변수를 대입하면 똑같은 객체를 바라봄