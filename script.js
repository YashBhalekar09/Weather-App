const btn = document.getElementById("button");
const cityinput = document.getElementById("city");

const cityname = document.getElementById("cityname");
const temperature = document.getElementById("temp");
const citytime = document.getElementById("time");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const humidiy = document.getElementById("humidiy");

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(() => {
    loader.style.display = "none";
    console.log("hi");
  }, 1200);
});

async function getData(cityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=833de213750a47dfb0a91301240911&q=${cityName}&aqi=yes`
  );

  return await promise.json();
}

btn.addEventListener("click", async () => {
  const value = cityinput.value;
  const res = await getData(value);
  cityname.innerText =
    "City:  " +
    `${res.location.name},${res.location.region},${res.location.country}`;
  citytime.innerText = "Time:  " + res.location.localtime;
  temperature.innerText = "Temperature:  " + res.current.temp_c + " °cel";
  wind.innerText = "Wind Speed:  " + res.current.wind_mph + "m/hr";
  pressure.innerText = "Pressure:  " + res.current.pressure_mb;
  humidity.innerText = "Humidity:  " + res.current.humidity;
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}
