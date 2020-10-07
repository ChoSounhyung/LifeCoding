//rest parameters

function checkNum() {
    //arguments는 배열이 아니므로 Array의 유용한 메소드를 쓸 수 없음 --> 진짜 배열로 변경해 줘야 함
    const argArray = Array.prototype.slice.call(arguments);     //Array.prototype.slice.call 이를 arguments라는 context에서 실행
    console.log(argArray)                       //[10, 2, 3, 4, 5, "55"]
    console.log(toString.call(arguments));      //arguments타입
    console.log(toString.call(argArray));       //array타입
    const result = argArray.every((v) => typeof v === "number");       //typeof v === "number" 이 값이 true일 경우에만 true를 반환
    console.log(result);        //false --> "55"가 문자열이기 때문
}

const result = checkNum(10, 2, 3, 4, 5, "55");

function checkNum(...argArray) {                //rest parameter(진짜 배열로 바꿔줌)
    console.log(toString.call(argArray));       //"[object Array]"
    const result = argArray.every((v) => typeof v === "number");
    console.log(result);
}