var userInputEl = ("#user-input")
var userSearchEl = ("#user-search")

function test() {
  console.log(userInputEl)
}
test()

$("#submitBtn").on("submit", function(event){
  event.preventDefault();
  var cityInput = $("input").val();
  console.log(cityInput)
})

var APIKey = "24ddea9b56dde674a6f33a693e09dce7";
var city = $(this).text(cityInput)
// Here we are building the URL we need to query the database

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + APIKey;


// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

//  Console Logs
  console.log(response)
  console.log(response.weather)

// Variables
  var k = (response.main.temp)
  var f = (k - 273.15) * 1.8 + 32;
  console.log(f)
  var h = (response.main.humidity)
  var w = (response.wind.speed)

//  Appendages
  $(".temp").append(f)
  $(".humidity").append(h)
  $(".windSpeed").append(w)
});