function formatDate() {
  let date = document.querySelector(".date");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let number = now.getDate();
  let timeFirst = now.getHours();
  let timeSecond = now.getMinutes();

  if (timeFirst < 10) {
    timeFirst = "0".concat(timeFirst);
  }

  if (timeSecond < 10) {
    timeSecond = "0".concat(timeSecond);
  }
  date.innerHTML = `${number} ${month}, ${day}, ${timeFirst}:${timeSecond}`;
}
formatDate();

//

function fiveForecast() {
  let one = document.querySelector("#day-one");
  let two = document.querySelector("#day-two");
  let three = document.querySelector("#day-three");
  let four = document.querySelector("#day-four");
  let five = document.querySelector("#day-five");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  if (day === days[0]) {
    one.innerHTML = "Mon";
    two.innerHTML = "Tue";
    three.innerHTML = "Wd";
    four.innerHTML = "Th";
    five.innerHTML = "Fr";
  } else if (day === days[1]) {
    one.innerHTML = "Tue";
    two.innerHTML = "Wd";
    three.innerHTML = "Th";
    four.innerHTML = "Fr";
    five.innerHTML = "St";
  } else if (day === days[2]) {
    one.innerHTML = "Wd";
    two.innerHTML = "Th";
    three.innerHTML = "Fr";
    four.innerHTML = "St";
    five.innerHTML = "Sn";
  } else if (day === days[3]) {
    one.innerHTML = "Th";
    two.innerHTML = "Fr";
    three.innerHTML = "St";
    four.innerHTML = "Sn";
    five.innerHTML = "Mn";
  } else if (day === days[4]) {
    one.innerHTML = "Fr";
    two.innerHTML = "St";
    three.innerHTML = "Sn";
    four.innerHTML = "Mon";
    five.innerHTML = "Tue";
  } else if (day === days[5]) {
    one.innerHTML = "St";
    two.innerHTML = "Sn";
    three.innerHTML = "Mon";
    four.innerHTML = "Tue";
    five.innerHTML = "Wd";
  } else if (day === days[6]) {
    one.innerHTML = "Sn";
    two.innerHTML = "Mon";
    three.innerHTML = "Tue";
    four.innerHTML = "Wd";
    five.innerHTML = "Th";
  }
}

fiveForecast();

//

function searchFor(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let main = document.querySelector("#main-city");
  main.innerHTML = `${city.value}`;
  let apiKey = "d2e3511352e3ff24514830ca0f6b94b4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;

  axios.get(url).then(searching);
}

function searching(response) {
  console.log(response.data);
  let temperature = document.querySelector("#main-degree");
  let high = document.querySelector("#degree-max");
  let low = document.querySelector("#degree-min");
  let wind = document.querySelector("#wind-speed");
  let visible = document.querySelector("#visibility");
  //
  high.innerHTML = Math.round(response.data.main.temp_max);
  low.innerHTML = Math.round(response.data.main.temp_min);
  temperature.innerHTML = Math.round(response.data.main.temp);
  visible.innerHTML = response.data.weather[0].description;
  wind.innerHTML = `wind: ${Math.round(response.data.wind.speed)} km/h`;
}

//
let urlDefault =
  "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d2e3511352e3ff24514830ca0f6b94b4&units=metric";

function defaultNumber(response) {
  console.log(response.data);
  let kyivTemp = document.querySelector("#main-degree");
  let kyivMin = document.querySelector("#degree-min");
  let kyivMax = document.querySelector("#degree-max");
  let kyivVisible = document.querySelector("#visibility");
  let kyivWind = document.querySelector("#wind-speed");
  //
  kyivTemp.innerHTML = Math.round(response.data.main.temp);
  kyivMax.innerHTML = Math.round(response.data.main.temp_max);
  kyivMin.innerHTML = Math.round(response.data.main.temp_min);
  kyivVisible.innerHTML = response.data.weather[0].description;
  kyivWind.innerHTML = `wind: ${Math.round(response.data.wind.speed)} km/h`;
}

axios.get(urlDefault).then(defaultNumber);

//

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchFor);

//
