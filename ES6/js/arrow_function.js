//arrow function

/*
setTimeout(function() {
    console.log("settimeout");
}, 1000);
*/

setTimeout(() => {
    console.log("settimeout");
}, 1000);

/*
let newArr = [1,2,3,4,5].map(function(value, index, object) {   //인자의 함수가 너무 김
    return value * 2;       //es6에서는 return 생략 가능
});

console.log(newArr);        //[2,4,6,8,10]
*/

let newArr = [1,2,3,4,5].map((v) => v * 2);         //map의 인자를 콜백함수라고 인식함

console.log("arrow newArr", newArr);    