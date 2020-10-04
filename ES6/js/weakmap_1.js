//Map & WeakMap 추가 정보를 담은 객체 저장하기
//Array -> Set, WeakSet
//Object -> Map, WeakMap

//map은 key/value구조   -->   객체만 저장하는게 아니라 부연설명도 같이 보관

let wm = new WeakMap();
let myfun = function() {};
//이 함수가 얼마나 실행됐는지 알려고 할 때

wm.set(myfun, 0);

console.log(wm);        //[object WeakMap]  {...}       WeakMap {function => 0}

let count = 0;
for(let i=0; i<10; i++) {
    count = wm.get(myfun);      //get value
    count++;
    wm.set(myfun, count);
}

console.log(wm);        // WeakMap {function => 10}

console.log(wm.get(myfun));        // 10

myfun = null;
console.log(wm.get(myfun));         //undefined
console.log(wm.has(myfun));         //false