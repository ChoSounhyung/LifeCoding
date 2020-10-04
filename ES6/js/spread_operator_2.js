//spread operator - 몇가지 활용

let pre = [100, 200, "hello", null];

let newData = [0, 1, 2, ...pre, 3];
console.log(newData);       //[0, 1, 2, 100, 200, "hello", null, 3]

function sum(a, b, c) {
    return a + b + c;
}

let num = [100, 200, 300];

console.log(sum.apply(null, num));       //num이 펼쳐지면서 sum의 매개변수로 들어감   
console.log(sum(...num));