//const 특성과 immutable array

function home() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
}
//const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능
//immutable array : 뒤로가기, 앞으로가기(값을 저장해서 보여줘야 할 때)
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list === list2);        //false (list : a, o, w | list2 : a, o, w, b)


home();