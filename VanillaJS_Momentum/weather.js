const weather = document.querySelector(".js-weather");

const API_KEY = "846b45bf6acf7edd92a32da6663546ed";
const COORDS = "coords";

function getWeather(lat, lng) {
  // fetch안에 가져올 데이터가 들어가면 됨 (따옴표가 아닌 백틱 사용)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function (json) {
      // console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
  // then : 데이터가 우리한테 넘어왔을 때 함수 실행
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  //console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    // console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
