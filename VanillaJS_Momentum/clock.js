//js-clock이라는 클래스 이름을 찾아줌
const clockContainer = document.querySelector(".js-clock");
//js-clock 클래스의 자식을 탐색
clockTitle = clockContainer.querySelector(".hi");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
