//ES2015 string의 새로운 메서드들

let str = "hello world ! ^^ ~";
let matchstr = "hello";
console.log(str.startsWith(matchstr));      //true
console.log(str.endsWith(matchstr));        //false
console.log(str.includes("world"));         //true