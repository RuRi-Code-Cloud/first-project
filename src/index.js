function allInformation(response) {
  document.querySelector("h3").innerHTML = response.data.weather[0].main;
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#nine").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML =
    `Humidity: ` + response.data.main.humidity + ` %`;
  document.querySelector("#wind").innerHTML =
    `Wind: ` + response.data.wind.speed + ` km/h`;
}

function searchContry(event) {
  event.preventDefault();
  let apiKey = `22a70bd30622ed3d96093e0f712203ad`;
  let city = document.querySelector("#first").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(allInformation);
}

function fahrenheit(event) {
  event.preventDefault();
  let link = document.querySelector("#nine");
  link.innerHTML = "66";
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", fahrenheit);

function celsius(event) {
  event.preventDefault();
  let link = document.querySelector("#nine");
  link.innerHTML = "19";
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", celsius);

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let text = document.querySelector("h2");
text.innerHTML = `${day} ${hour}:${minutes}`;
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchContry);
