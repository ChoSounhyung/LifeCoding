/* 
filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기
*/
function print() {
    let list = document.querySelectorAll('li');
    console.log(toString.call(list));       //"[object NodeList]"

    let listArray = Array.from(list);       //li노드로 구성된 배열
    console.log(toString.call(listArray));  //"[object Array]"

    let eArray = listArray.filter(function(v) {     //filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
        return v.innerText.includes("e");           //v가 노드이므로 DOM에 있는 속성을 이용해야됨
    });
    console.log(eArray.length);                     //3
    return eArray;
}

console.log(print());