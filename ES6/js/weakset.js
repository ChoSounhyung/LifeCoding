//WeakSet을 효과적으로 객체타입 저장하기
//참조를 가지고 있는 객체만 저장이 가능하다.
//객체 형태를 중복없이 저장하려고 할 때 유용하다.

let arr = [1, 2, 3, 4];
let arr = [5, 6, 7, 8];
let obg = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);

console.log(ws);        //WeakSet {(4) [1, 2, 3, 4]}
/*
ws.add(111);
ws.add("111");
ws.add(null);
*/      //Invalid type

ws.add(function(){});   //WeakSet {(4) [1, 2, 3, 4], function}      function도 참조를 갖고 있으므로 가능

//객체가 null로 되거나 필요가 없어지면 자동으로 가비지 컬렉션 대상이 됨(WeakSet에서도 그 정보가 없어짐)

ws.add(arr2);
ws.add(obj);
//WeakSet {(4) [5, 6, 7, 8], (4) [1, 2, 3, 4], function, Object {arr: Array(4), arr2: Array(4)}}

arr = null;
console.log(ws);
//WeakSet {(4) [5, 6, 7, 8], (4) [1, 2, 3, 4], function, Object {arr: Array(4), arr2: Array(4)}} --> WeakSet에는 존재하는 것 처럼 보임

console.log(ws.has(arr), ws.has(arr2))      //false true
