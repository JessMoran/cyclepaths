$(document).ready(function () {
  var geolocation = document.getElementById("location")

  var kelvin = document.getElementById("kel")
  var fahrenheit = document.getElementById("far")
  var celsius = document.getElementById("cel")
  var units = "&units=imperial";
  celsius.addEventListener("click", function () {
    units = "&units=metric";
    navigator.geolocation.getCurrentPosition(getWeather);
  })
  fahrenheit.addEventListener("click", function () {
    units = "&units=imperial";
    navigator.geolocation.getCurrentPosition(getWeather);
  })
  kelvin.addEventListener("click", function () {
    units = "";
    navigator.geolocation.getCurrentPosition(getWeather);
  })

  function getWeather(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let API_KEY = '2eec2dbdcaba6e2f1c110b67cde1c0d3';
    let baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}${units}`;

    $.get(baseURL, function (res) {
      let data = res.current;
      let temp = Math.floor(data.temp);
      let condition = data.weather[0].description;

      $('#temp-main').html(`${temp}°`);
      $('#condition').html(condition);
    })

  }
});
