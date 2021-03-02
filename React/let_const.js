const arr1 = [];

//배열에 새로운 값을 추가할 때는 push() 대신 concat()
const arr2 = arr1.concat(1); // arr2 = [1]
const arr3 = [...arr2, 2, 3]; // arr3 = [1, 2, 3]

//함수 삭제할 때는 pop(), shift() 함수 대신 slice(), concat() 함수에 전개 연산자를 조합하여 사용
const arr4 = arr3.slice(0, 1); // arr4 = [1]
const [first, ...arr5] = arr3; // first = 1     arr5 = [2. 3]

const obj1 = { name: "내이름", age: 20 };
const obj2 = { name: "새이름", age: obj1.age };
const obj3 = { ...obj1, name: "새이름" }; // obj3 = {name: "새이름", age:20}
const { name, ...obj4 } = obj3; // name = "새이름"      obj4 = {age: 20}

// ==> 이렇게 하면 새 값을 할당하는 것이 아니라 기존의 값을 이용해 새 불변 변수에 할당하는 것이므로 괜찮음
