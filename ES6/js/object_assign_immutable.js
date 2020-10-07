//Object assign으로 Immutable 객체 만들기

const previousObj = {
    name : "crong",
    lastTime : "11:20"
}

const myHealth = Object.assign({}, previousObj, {
    "lastTime : " : "12:30",
    "age" : 99
});
//이전 객체의 값을 다 추출하고 그중에 새로운 값이 있으면 대체, 없으면 그대로

console.log("myhealth is ", myHealth);      //object Object {age : 99, lastTime : "12:30", name : "crong"}

//이전값으로 되돌리기 기능을 구현할 때 사용 가능
