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
//

function fiveForecastdaily(response) {
  console.log(response);
  let one = document.querySelector("#first-day");
  let two = document.querySelector("#second-day");
  let three = document.querySelector("#third-day");
  let four = document.querySelector("#fourth-day");
  let five = document.querySelector("#fifth-day");

  //

  one.innerHTML = `${Math.round(response.data.daily[0].temp.day)}°`;
  two.innerHTML = `${Math.round(response.data.daily[1].temp.day)}°`;
  three.innerHTML = `${Math.round(response.data.daily[2].temp.day)}°`;
  four.innerHTML = `${Math.round(response.data.daily[3].temp.day)}°`;
  five.innerHTML = `${Math.round(response.data.daily[4].temp.day)}°`;

  //

  let oneIcon = document.getElementById("weather-one");
  let twoIcon = document.getElementById("weather-two");
  let threeIcon = document.getElementById("weather-three");
  let fourIcon = document.getElementById("weather-four");
  let fiveIcon = document.getElementById("weather-five");

  //

  if (response.data.daily[0].weather[0].description === "clear sky") {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[0].weather[0].description === "few clouds" ||
    response.data.daily[0].weather[0].description === "scattered clouds" ||
    response.data.daily[0].weather[0].description === "broken clouds" ||
    response.data.daily[0].weather[0].description === "overcast clouds"
  ) {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[0].weather[0].description === "light rain" ||
    response.data.daily[0].weather[0].description === "moderate rain" ||
    response.data.daily[0].weather[0].description === "heavy intensity rain" ||
    response.data.daily[0].weather[0].description === "very heavy rain" ||
    response.data.daily[0].weather[0].description === "extreme rain" ||
    response.data.daily[0].weather[0].description === "freezing rain" ||
    response.data.daily[0].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[0].weather[0].description === "shower rain" ||
    response.data.daily[0].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[0].weather[0].description === "ragged shower rain"
  ) {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-cloud-rain rain";
  }

  //
  if (response.data.daily[1].weather[0].description === "clear sky") {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[1].weather[0].description === "few clouds" ||
    response.data.daily[1].weather[0].description === "scattered clouds" ||
    response.data.daily[1].weather[0].description === "broken clouds" ||
    response.data.daily[1].weather[0].description === "overcast clouds"
  ) {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[1].weather[0].description === "light rain" ||
    response.data.daily[1].weather[0].description === "moderate rain" ||
    response.data.daily[1].weather[0].description === "heavy intensity rain" ||
    response.data.daily[1].weather[0].description === "very heavy rain" ||
    response.data.daily[1].weather[0].description === "extreme rain" ||
    response.data.daily[1].weather[0].description === "freezing rain" ||
    response.data.daily[1].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[1].weather[0].description === "shower rain" ||
    response.data.daily[1].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[1].weather[0].description === "ragged shower rain"
  ) {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if (response.data.daily[2].weather[0].description === "clear sky") {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[2].weather[0].description === "few clouds" ||
    response.data.daily[2].weather[0].description === "scattered clouds" ||
    response.data.daily[2].weather[0].description === "broken clouds" ||
    response.data.daily[2].weather[0].description === "overcast clouds"
  ) {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[2].weather[0].description === "light rain" ||
    response.data.daily[2].weather[0].description === "moderate rain" ||
    response.data.daily[2].weather[0].description === "heavy intensity rain" ||
    response.data.daily[2].weather[0].description === "very heavy rain" ||
    response.data.daily[2].weather[0].description === "extreme rain" ||
    response.data.daily[2].weather[0].description === "freezing rain" ||
    response.data.daily[2].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[2].weather[0].description === "shower rain" ||
    response.data.daily[2].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[2].weather[0].description === "ragged shower rain"
  ) {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if ((response.data.daily[3].weather[0].description = "clear sky")) {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[3].weather[0].description === "few clouds" ||
    response.data.daily[3].weather[0].description === "scattered clouds" ||
    response.data.daily[3].weather[0].description === "broken clouds" ||
    response.data.daily[3].weather[0].description === "overcast clouds"
  ) {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[3].weather[0].description === "light rain" ||
    response.data.daily[3].weather[0].description === "moderate rain" ||
    response.data.daily[3].weather[0].description === "heavy intensity rain" ||
    response.data.daily[3].weather[0].description === "very heavy rain" ||
    response.data.daily[3].weather[0].description === "extreme rain" ||
    response.data.daily[3].weather[0].description === "freezing rain" ||
    response.data.daily[3].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[3].weather[0].description === "shower rain" ||
    response.data.daily[3].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[3].weather[0].description === "ragged shower rain"
  ) {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if (response.data.daily[4].weather[0].description === "clear sky") {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[4].weather[0].description === "few clouds" ||
    response.data.daily[4].weather[0].description === "scattered clouds" ||
    response.data.daily[4].weather[0].description === "broken clouds" ||
    response.data.daily[4].weather[0].description === "overcast clouds"
  ) {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[4].weather[0].description === "light rain" ||
    response.data.daily[4].weather[0].description === "moderate rain" ||
    response.data.daily[4].weather[0].description === "heavy intensity rain" ||
    response.data.daily[4].weather[0].description === "very heavy rain" ||
    response.data.daily[4].weather[0].description === "extreme rain" ||
    response.data.daily[4].weather[0].description === "freezing rain" ||
    response.data.daily[4].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[4].weather[0].description === "shower rain" ||
    response.data.daily[4].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[4].weather[0].description === "ragged shower rain"
  ) {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-cloud-rain rain";
  }

  //

  degreeCelOne = response.data.daily[0].temp.day;
  degreeCelTwo = response.data.daily[1].temp.day;
  degreeCelThree = response.data.daily[2].temp.day;
  degreeCelFour = response.data.daily[3].temp.day;
  degreeCelFive = response.data.daily[4].temp.day;
}

//

//

function forecast(coordinates) {
  let apiKey = "d2e3511352e3ff24514830ca0f6b94b4";
  let lat = coordinates.lat;
  let lon = coordinates.lon;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlForecast).then(fiveForecastdaily);
}

//

function searching(response) {
  console.log(response.data);
  let temperature = document.querySelector("#main-degree");
  let high = document.querySelector("#degree-max");
  let low = document.querySelector("#degree-min");
  let wind = document.querySelector("#wind-speed");
  let visible = document.querySelector("#visibility");
  let weatherNow = document.getElementById("main-weather");

  //

  if (response.data.weather[0].main === "Clear") {
    weatherNow.innerHTML = "";
    weatherNow.className = "fa-solid fa-sun sun";
  } else if (response.data.weather[0].main === "Clouds") {
    weatherNow.innerHTML = "";
    weatherNow.className = "fa-solid fa-cloud-sun cloud";
  } else if (response.data.weather[0].main === "Rain") {
    weatherNow.innerHTML = "";
    weatherNow.className = "fa-solid fa-cloud-rain rain";
  }

  //

  high.innerHTML = Math.round(response.data.main.temp_max);
  low.innerHTML = Math.round(response.data.main.temp_min);
  temperature.innerHTML = Math.round(response.data.main.temp);
  visible.innerHTML = response.data.weather[0].description;
  wind.innerHTML = `wind: ${Math.round(response.data.wind.speed)} km/h`;

  //

  degreeCel = response.data.main.temp;
  degreeCelMax = response.data.main.temp_max;
  degreeCelMin = response.data.main.temp_min;

  //

  forecast(response.data.coord);
}

//

function defaultForecast(response) {
  console.log(response);
  let oneKyiv = document.querySelector("#first-day");
  let twoKyiv = document.querySelector("#second-day");
  let threeKyiv = document.querySelector("#third-day");
  let fourKyiv = document.querySelector("#fourth-day");
  let fiveKyiv = document.querySelector("#fifth-day");

  //

  oneKyiv.innerHTML = `${Math.round(response.data.daily[0].temp.day)}°`;
  twoKyiv.innerHTML = `${Math.round(response.data.daily[1].temp.day)}°`;
  threeKyiv.innerHTML = `${Math.round(response.data.daily[2].temp.day)}°`;
  fourKyiv.innerHTML = `${Math.round(response.data.daily[3].temp.day)}°`;
  fiveKyiv.innerHTML = `${Math.round(response.data.daily[4].temp.day)}°`;

  //
  let oneIcon = document.getElementById("weather-one");
  let twoIcon = document.getElementById("weather-two");
  let threeIcon = document.getElementById("weather-three");
  let fourIcon = document.getElementById("weather-four");
  let fiveIcon = document.getElementById("weather-five");

  //

  if (response.data.daily[0].weather[0].description === "clear sky") {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[0].weather[0].description === "few clouds" ||
    response.data.daily[0].weather[0].description === "scattered clouds" ||
    response.data.daily[0].weather[0].description === "broken clouds" ||
    response.data.daily[0].weather[0].description === "overcast clouds"
  ) {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[0].weather[0].description === "light rain" ||
    response.data.daily[0].weather[0].description === "moderate rain" ||
    response.data.daily[0].weather[0].description === "heavy intensity rain" ||
    response.data.daily[0].weather[0].description === "very heavy rain" ||
    response.data.daily[0].weather[0].description === "extreme rain" ||
    response.data.daily[0].weather[0].description === "freezing rain" ||
    response.data.daily[0].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[0].weather[0].description === "shower rain" ||
    response.data.daily[0].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[0].weather[0].description === "ragged shower rain"
  ) {
    oneIcon.innerHTML = "";
    oneIcon.className = "fa-solid fa-cloud-rain rain";
  }

  //
  if (response.data.daily[1].weather[0].description === "clear sky") {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[1].weather[0].description === "few clouds" ||
    response.data.daily[1].weather[0].description === "scattered clouds" ||
    response.data.daily[1].weather[0].description === "broken clouds" ||
    response.data.daily[1].weather[0].description === "overcast clouds"
  ) {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[1].weather[0].description === "light rain" ||
    response.data.daily[1].weather[0].description === "moderate rain" ||
    response.data.daily[1].weather[0].description === "heavy intensity rain" ||
    response.data.daily[1].weather[0].description === "very heavy rain" ||
    response.data.daily[1].weather[0].description === "extreme rain" ||
    response.data.daily[1].weather[0].description === "freezing rain" ||
    response.data.daily[1].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[1].weather[0].description === "shower rain" ||
    response.data.daily[1].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[1].weather[0].description === "ragged shower rain"
  ) {
    twoIcon.innerHTML = "";
    twoIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if (response.data.daily[2].weather[0].description === "clear sky") {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[2].weather[0].description === "few clouds" ||
    response.data.daily[2].weather[0].description === "scattered clouds" ||
    response.data.daily[2].weather[0].description === "broken clouds" ||
    response.data.daily[2].weather[0].description === "overcast clouds"
  ) {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[2].weather[0].description === "light rain" ||
    response.data.daily[2].weather[0].description === "moderate rain" ||
    response.data.daily[2].weather[0].description === "heavy intensity rain" ||
    response.data.daily[2].weather[0].description === "very heavy rain" ||
    response.data.daily[2].weather[0].description === "extreme rain" ||
    response.data.daily[2].weather[0].description === "freezing rain" ||
    response.data.daily[2].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[2].weather[0].description === "shower rain" ||
    response.data.daily[2].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[2].weather[0].description === "ragged shower rain"
  ) {
    threeIcon.innerHTML = "";
    threeIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if (response.data.daily[3].weather[0].description === "clear sky") {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[3].weather[0].description === "few clouds" ||
    response.data.daily[3].weather[0].description === "scattered clouds" ||
    response.data.daily[3].weather[0].description === "broken clouds" ||
    response.data.daily[3].weather[0].description === "overcast clouds"
  ) {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[3].weather[0].description === "light rain" ||
    response.data.daily[3].weather[0].description === "moderate rain" ||
    response.data.daily[3].weather[0].description === "heavy intensity rain" ||
    response.data.daily[3].weather[0].description === "very heavy rain" ||
    response.data.daily[3].weather[0].description === "extreme rain" ||
    response.data.daily[3].weather[0].description === "freezing rain" ||
    response.data.daily[3].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[3].weather[0].description === "shower rain" ||
    response.data.daily[3].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[3].weather[0].description === "ragged shower rain"
  ) {
    fourIcon.innerHTML = "";
    fourIcon.className = "fa-solid fa-cloud-rain rain";
  }
  //

  if (response.data.daily[4].weather[0].description === "clear sky") {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-sun sun";
  } else if (
    response.data.daily[4].weather[0].description === "few clouds" ||
    response.data.daily[4].weather[0].description === "scattered clouds" ||
    response.data.daily[4].weather[0].description === "broken clouds" ||
    response.data.daily[4].weather[0].description === "overcast clouds"
  ) {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-cloud-sun cloud";
  } else if (
    response.data.daily[4].weather[0].description === "light rain" ||
    response.data.daily[4].weather[0].description === "moderate rain" ||
    response.data.daily[4].weather[0].description === "heavy intensity rain" ||
    response.data.daily[4].weather[0].description === "very heavy rain" ||
    response.data.daily[4].weather[0].description === "extreme rain" ||
    response.data.daily[4].weather[0].description === "freezing rain" ||
    response.data.daily[4].weather[0].description ===
      "light intensity shower rain" ||
    response.data.daily[4].weather[0].description === "shower rain" ||
    response.data.daily[4].weather[0].description ===
      "heavy intensity shower rain" ||
    response.data.daily[4].weather[0].description === "ragged shower rain"
  ) {
    fiveIcon.innerHTML = "";
    fiveIcon.className = "fa-solid fa-cloud-rain rain";
  }

  //

  degreeCelOne = response.data.daily[0].temp.day;
  degreeCelTwo = response.data.daily[1].temp.day;
  degreeCelThree = response.data.daily[2].temp.day;
  degreeCelFour = response.data.daily[3].temp.day;
  degreeCelFive = response.data.daily[4].temp.day;
}

//
function forecastKyiv(coordinates) {
  let apiKey = "d2e3511352e3ff24514830ca0f6b94b4";
  let lat = coordinates.lat;
  let lon = coordinates.lon;
  let apiUrlForecastKyiv = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlForecastKyiv).then(defaultForecast);
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
  let weatherNowKyiv = document.getElementById("main-weather");

  //

  if (response.data.weather[0].main === "Clear") {
    weatherNowKyiv.innerHTML = "";
    weatherNowKyiv.className = "fa-solid fa-sun sun";
  } else if (response.data.weather[0].main === "Clouds") {
    weatherNowKyiv.innerHTML = "";
    weatherNowKyiv.className = "fa-solid fa-cloud-sun cloud";
  } else if (response.data.weather[0].main === "Rain") {
    weatherNowKyiv.innerHTML = "";
    weatherNowKyiv.className = "fa-solid fa-cloud-rain rain";
  }

  //

  kyivTemp.innerHTML = Math.round(response.data.main.temp);
  kyivMax.innerHTML = Math.round(response.data.main.temp_max);
  kyivMin.innerHTML = Math.round(response.data.main.temp_min);
  kyivVisible.innerHTML = response.data.weather[0].description;
  kyivWind.innerHTML = `wind: ${Math.round(response.data.wind.speed)} km/h`;

  //

  degreeCel = response.data.main.temp;
  degreeCelMax = response.data.main.temp_max;
  degreeCelMin = response.data.main.temp_min;

  //

  forecastKyiv(response.data.coord);
}

axios.get(urlDefault).then(defaultNumber);

//

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchFor);

//

function convertFahr() {
  let tempFahr = document.getElementById("main-degree");
  let tempFahrMax = document.querySelector("#degree-max");
  let tempFahrMin = document.querySelector("#degree-min");
  let oneCel = document.querySelector("#first-day");
  let twoCel = document.querySelector("#second-day");
  let threeCel = document.querySelector("#third-day");
  let fourCel = document.querySelector("#fourth-day");
  let fiveCel = document.querySelector("#fifth-day");
  //
  let convertionFahr = ((Number.isNaN(tempFahr) + degreeCel) * 9) / 5 + 32;
  let convertionFahrMax =
    ((Number.isNaN(tempFahrMax) + degreeCelMax) * 9) / 5 + 32;
  let convertionFahrMin =
    ((Number.isNaN(tempFahrMin) + degreeCelMin) * 9) / 5 + 32;
  let convertionOne = ((Number.isNaN(oneCel) + degreeCelOne) * 9) / 5 + 32;
  let convertionTwo = ((Number.isNaN(twoCel) + degreeCelTwo) * 9) / 5 + 32;
  let convertionThree =
    ((Number.isNaN(threeCel) + degreeCelThree) * 9) / 5 + 32;
  let convertionFour = ((Number.isNaN(fourCel) + degreeCelFour) * 9) / 5 + 32;
  let convertionFive = ((Number.isNaN(fiveCel) + degreeCelFive) * 9) / 5 + 32;

  //
  tempFahr.innerHTML = Math.round(convertionFahr);
  tempFahrMax.innerHTML = Math.round(convertionFahrMax);
  tempFahrMin.innerHTML = Math.round(convertionFahrMin);
  oneCel.innerHTML = `${Math.round(convertionOne)}°`;
  twoCel.innerHTML = `${Math.round(convertionTwo)}°`;
  threeCel.innerHTML = `${Math.round(convertionThree)}°`;
  fourCel.innerHTML = `${Math.round(convertionFour)}°`;
  fiveCel.innerHTML = `${Math.round(convertionFive)}°`;
}
let fahr = document.querySelector("#fahrenheit");
fahr.addEventListener("click", convertFahr);

//

function convertCel() {
  let tempCel = document.querySelector("#main-degree");
  let tempCelMax = document.querySelector("#degree-max");
  let tempCelMin = document.querySelector("#degree-min");
  let oneCelF = document.querySelector("#first-day");
  let twoCelF = document.querySelector("#second-day");
  let threeCelF = document.querySelector("#third-day");
  let fourCelF = document.querySelector("#fourth-day");
  let fiveCelF = document.querySelector("#fifth-day");

  tempCel.innerHTML = Math.round(degreeCel);
  tempCelMax.innerHTML = Math.round(degreeCelMax);
  tempCelMin.innerHTML = Math.round(degreeCelMin);
  oneCelF.innerHTML = `${Math.round(degreeCelOne)}°`;
  twoCelF.innerHTML = `${Math.round(degreeCelTwo)}°`;
  threeCelF.innerHTML = `${Math.round(degreeCelThree)}°`;
  fourCelF.innerHTML = `${Math.round(degreeCelFour)}°`;
  fiveCelF.innerHTML = `${Math.round(degreeCelFive)}°`;
}

let cel = document.querySelector("#celcius");
cel.addEventListener("click", convertCel);

//

let degreeCel = null;
let degreeCelMax = null;
let degreeCelMin = null;

//

let degreeCelOne = null;
let degreeCelTwo = null;
let degreeCelThree = null;
let degreeCelFour = null;
let degreeCelFive = null;
