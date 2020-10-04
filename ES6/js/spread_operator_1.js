//spread operator - 배열의 복사, 펼침연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);          //["apple", "orange", 100]   ["apple", "orange", 100]
console.log(pre === newData);       //false (내용은 같지만 다른 데이터) | 기존의 참조를 끊고 메모리의 새로운 공간에 새로운 배열로 들어감
