const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// querySelector는 HTML에서 원하는 것을 얻어오는 것
// createElement는 반대로 HTML에 생성하는 것

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault(); // event의 기본 동작을 없애기 위해(엔터 누르면 input에 입력한 정보가 사라짐)
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit과 같은 기능을 하도록 input 내용을 지움
}

function loadToDos() {
  // localStorage에서 온 것을 로드함
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  } // toDos는 list가 null이어도 항상 보이기 때문에 else는 생략
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
