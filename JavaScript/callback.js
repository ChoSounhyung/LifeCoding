//callback function
function sortNumber(a,b){

if(a > b) {
    return 1;
} else if(a < b) {
    return -1;
} else {
    return 0;
}

    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return a-b;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];