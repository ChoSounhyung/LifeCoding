//Set으로 유니크한 배열 만들기
let mySet = new Set();
//console.log(toString.call(mySet));      //"[object Set]"

//set : 중복없이 유일한 값을 저장하려고 할 때. 이미 존재하는지 체크할 때 유용

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"));        //"crong"이 있는지 여부 판단    (true)

mySet.forEach(function(v) {
    console.log(v);     //"crong"   "hary"
});

mySet.delete("crong");

mySet.forEach(function(v) {
    console.log(v);     //"hary"
});