const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// querySelector는 HTML에서 원하는 것을 얻어오는 것
// createElement는 반대로 HTML에 생성하는 것

const TODOS_LS = "toDos";
const toDos = [];

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
