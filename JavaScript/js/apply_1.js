function sum(arg1, arg2) {
    return arg1 + arg2
}

sum(1, 2);      // 3
sum(2, 4);      // 6

sum.apply       // function apply() {[native code]} -> apply : sum이라는 함수 객체에 담긴 메서드, native code -> 내장 코드
sum.apply(null, [1, 2]);     // 3
sum.apply(null, [4, 2]);     // 6

//apply : 두번째 인자로 원래 인자를 배열로 담음