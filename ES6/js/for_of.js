//for of - 순회하기

var data = [1, 2, undefined, NaN, null, ""];
/*
for(var i=0; i<data.length; i++) {
    console.log(i);
}
*/

/*
data.forEach(function(value) {
    console.log(value);
});
*/

/*
Array.prototype.getIndex = function(){};
for(let idx in data) {      //for-in : object를 순회할 때 사용, 문제점 : 자신이 갖고 있지 않은 상위의 값들도 포함할 수 있음
    console.log(data[idx]); //기존 배열에 function(){}이 추가됨
}
*/

Array.prototype.getIndex = function(){};
for(let value of data) {      //for-of : for-in의 실수를 줄일 수 있음
    console.log(data[value]); //기존 배열에 function(){}이 추가되지 않음
}

var str = "hello world!!!!";
for(let value of str) {
    console.log(value);     //"h" "e" "l" "l" "o" " " "w" .....
}