var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
console.log(combined); //["one", "two", "three", "four"]

var first = array1[0];
var second = array1[1];
var three = array2[2] || "empty"; // ||를 사용하면 ㅊ출할 배열 요소가 없을 때 기본값 지정 가능

function func() {
  // call() 메소드는 첫번째 인자로 객체를 줌, 해당 객체에 재할당할때 사용
  var args = Array.prototype.slice.call(this, arguments); // arguments를 사용해 함수 내 인자 항목들을 배열로 변환
  var first = args[0];
  var others = args.slice(1, args.length); // 인덱스 범위 1번 부터 마지막 항목까지 추출
}

// 전개 연산자 사용
const combined = [...array1, ...array2];
const [first, second, three = "empty", ...others] = array1; // one, two, empty, []

// 함수 인자 배열을 args 변수에 할당
function func2(...args) {
  var [first, ...others] = args;
}

var ObjectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: ObjectOne.one,
  two: ObjectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

var combined = Object.assign({}, ObjectOne, objectTwo); // { one: 1, two: 2, three: 3, four: 4, other: -1 }
var combined = Object.assign({}, objectTwo, ObjectOne); // { one: 1, two: 2, three: 3, four: 4, other: 0 }
var others = Object.assign({}, combined);
delete others.other; // { one: 1, two: 2, three: 3, four: 4 }

// 전개 연산자 이용
var combined = {
  ...ObjectOne,
  ...objectTwo,
};

var { other, ...others } = combined; // other = -1  others = { one: 1, two: 2, three: 3, four: 4 }
// 객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고,
// 나머지는 전개 연산자로 선언된 변수(others)에 할당 가능
