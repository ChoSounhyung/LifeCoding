//default parameters
//1
function sum(value, size) {
    size = size || 1;       //default값을 주면 size를 생략해도 NaN이 출력되지 않음
    return value * size;
}

console.log(sum(3, 10));    //30
console.log(sum(3));s       //NaN   -->   3

//2
function sum(value, size=1) {       //parameter 부분에서 기본값 설정 가능
    return value * size;
}

console.log(sum(3));        //3

//3
function sum(value, size = {value:1}) {
    return value * size.value;
}

console.log(sum(3, {value:3}));         //9