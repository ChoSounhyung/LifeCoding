/*
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');

function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());     //floor : 소수점 뒤를 제거  |   random(0~곱한 값(소수 포함))
    return arr[index];
}

console.log(getRandomValueFromArray(arr));
*/

Array.prototype.random = function() {       //prototype을 통해 배열 생성자를 통해 만들어진 객체가 random메소드를 갖고 있음
    //this : 배열 객체 자체를 가리킴
    var index = Math.floor(this.length * Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');       //this

console.log(arr.random());