//js-clock이라는 클래스 이름을 찾아줌
const clockContainer = document.querySelector(".js-clock");
//js-clock 클래스의 자식을 탐색
clockTitle = clockContainer.querySelector(".hi");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

//setInterval(fn, 1000)     첫번째 인자 : 실행할 함수, 두번째 인자 : 실행할 시간 간격
