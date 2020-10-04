//ES2015 from method로 진짜 배열 만들기

function addMark() {    //인자값을 안줘도 arguments객체를 이용해 배열과 비슷한 형태로 arguments에 들어감
    /*
    let newData = [];
    
    for(let i=0; i<arguments.length; i++) {
        newData.push(arguments[i] + "!");
    }
    */

    let newArray = Array.from(arguments);               //2. arguments로부터 배열 만듬
    let newData = arguments.map(function(value) {       //1. arguments는 배열과 흡사하지만 배열이 아님, map(배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과 반환)은 배열에만 사용할 수 있으므로 error
        return value + "!";
    });
    console.log(newData);
}

addMark(1, 2, 3, 4, 5);     //가변인자 사용할 때 유용