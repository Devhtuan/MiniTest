let search = document.querySelector(".search");
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let time = document.querySelector(".time");
let value = document.querySelector(".value");
let shortDesc = document.querySelector(".short-desc");
let visibility = document.querySelector(".visibility span");
let wind = document.querySelector(".wind span");
let cloud = document.querySelector(".cloud span");
let content = document.querySelector(".content ");
let body = document.querySelector("body ");

async function changeWeatherUI(cptSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cptSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    cloud.innerText = data.main.humidity + "%";
    let temp = Math.round(data.main.temp);
    value.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("VI");

    document.body.className = "hot";
    // body.setAttribute("class", "hot");
    if (temp < 20) {
      document.body.className = "cold";
    }
  } else {
    content.classList.add("hide");
  }
}
search.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    let cptSearch = search.value.trim();
    changeWeatherUI(cptSearch);
  }
});
changeWeatherUI("Ha Noi");
