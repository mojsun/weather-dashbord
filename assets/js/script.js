let userContainer = document.getElementById("container");
let fetchButton = document.getElementById("search-button");
let city = document.getElementById("City");
let pastSearch = document.getElementById("past");
//Function tied to event listener
var submit = function (event) {
  event.preventDefault();
  userContainer.textContent = "";
  var cityName = city.value;
  console.log(cityName);
  if (cityName) {
    getApi(cityName);
  } else {
    alert("PLease enter a city name");
  }
  city.value = "";
};

/**function for having information on the right side of the page **/
function getApi(cityName) {
  /**function for the first section of the right side **/
  function currentWeather(cityName) {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=95c0689e9f9d26f83c979fa053735e79&units=metric";

    fetch(requestUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          let currentCity = document.createElement("h3");
          let currentDate = document.createElement("p");
          let currentTemp = document.createElement("p");
          let currentWind = document.createElement("p");
          let currentHumidity = document.createElement("p");
          currentCity.textContent = data[i].name;
          currentDate.textContent = data[i].dt;
          currentTemp.textContent = data[i].main.temp;
          currentWind.textContent = data[i].wind;
          currentHumidity.textContent = data[i].humidity;
          userContainer.append(currentCity);
          userContainer.append(currentDate);
          userContainer.append(currentTemp);
          userContainer.append(currentWind);
          userContainer.append(currentHumidity);
        }
      });
  }
  /**function for the second section of the right side **/
  function futureWeather(cityName) {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=95c0689e9f9d26f83c979fa053735e79&units=metric";

    fetch(requestUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let futureWeatherArray = [
          data.list[7],
          data.list[15],
          data.list[23],
          data.list[31],
          data.list[39],
        ];
        for (let i = 0; i < futureWeatherArray.length; i++) {
          let futuredate = document.createElement("h3");
          let futureTemp = document.createElement("p");
          let futureWind = document.createElement("p");
          let futureHumidity = document.createElement("p");
        }
      });
  }
  currentWeather(cityName);
  futureWeather(cityName);
}

fetchButton.addEventListener("click", submit);

/** function for having name of the cities beneth the search bottun **/

//renderCities();
//citiesCategory = document.querySelector("#cityy");

/*function renderCities() {
  var cities = localStorage.getItem("search-input");
  if (!cities) {
    return;
  }
  citiesCategory.textContent = cities;
}
fetchButton.addEventListener("click", function (event) {
  event.preventDefault();
  var cityName = document.querySelector("#search-input").value;
  localStorage.setItem("city", cityName);
  renderCities();
});*/
//"https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=95c0689e9f9d26f83c979fa053735e79";
