const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// querySelector는 HTML에서 원하는 것을 얻어오는 것
// createElement는 반대로 HTML에 생성하는 것

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  // console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // filter는 forEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행하여 true인 아이템만 가지고 새로운 array를 만듬
  const cleanToDos = toDos.filter(function (toDo) {
    // console.log(typeof li.id);     // string
    // console.log(typeof toDo.id);    // number
    return toDo.id !== parseInt(li.id); // id가 다른것만 새 array에 담아 return
  });
  // console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // JSON.stringify는 자바스크립트 object를 string으로 바꿔 줌(localStorage에는 string만 저장 가능)
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); // push 하기 전에 저장하면 saveToDos를 불러도 toDos가 비어있어서 저장할게 없음
}

function handleSubmit(event) {
  event.preventDefault(); // event의 기본 동작을 없애기 위해(엔터 누르면 input에 입력한 정보가 사라짐)
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit과 같은 기능을 하도록 input 내용을 지움
}

function loadToDos() {
  // localStorage에서 온 것을 로드함
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    // console.log(loadedtoDos);
    // string이 아니라 Object를 불러와야됨
    const parsedToDos = JSON.parse(loadedtoDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      // console.log(toDo.text);
      paintToDo(toDo.text);
    });
  } // toDos는 list가 null이어도 항상 보이기 때문에 else는 생략
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
