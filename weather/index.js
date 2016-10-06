var tempC = 0
var tempF = 0

function getInfo() {
  $.ajax({
    url: "http://ipinfo.io/json",
    success: function(r) {
      var that = this;
      var city = r.city;
      $(".location").text(city);
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&appid=a7ec41aa1a60a0ec57db8290a3d016e4&lang=zh_cn",
        success: function(res) {
          $(".weather").text(res.weather[0].main);
          tempC = (res.main.temp - 273.15).toFixed(2)
          tempF = c2f(tempC).toFixed(2)
          $(".temp").text(tempC);
        }
      });
    }
  });
}

function c2f(value) {
  return value * 1.8 + 32;
}

$("document").ready(function() {
  getInfo();
  $(".cf").on("click", function() {
    if ($(".temp").text() == tempC) {
      $(".temp").text(tempF)
    } else {
      $(".temp").text(tempC)
    }
  });
})
