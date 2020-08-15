var userInputEl = ("#user-input")
var userSearchEl = ("#user-search")
var APIKey = "24ddea9b56dde674a6f33a693e09dce7";


// On click for submit button
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
 
  var value = $('#user-input').val();
  getWeather(value)
})
function getWeather(value) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&units=imperial&appid=" + APIKey;


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

    var h = (response.main.humidity)
    var w = (response.wind.speed)

    //  Appendages
    $(".temp").append(k)
    $(".humidity").append(h)
    $(".windSpeed").append(w)
    $.get("https://api.openweathermap.org/data/2.5/uvi?lat="+response.coord.lat+"&lon="+response.coord.lon+"&appid="+APIKey)
    .then(function(res){
      console.log(res)
    $(".uvIndex").append(res.value)
    })

  });

  // console.log(cityInput)
  // var item = $("<td>").text(cityInput).click(clickCityItem)
  // $(".table").append(Item)
  // citySearch(cityInput)
  // function clickCityItem (){
  //   var city = $(this).text()
  //   citySearch(city)
};


// var cityInput = ("this works")
// var APIKey = "24ddea9b56dde674a6f33a693e09dce7";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "charlotte" + "&units=imperial&appid=" + APIKey;


// // We then created an AJAX call
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (response) {

//   //  Console Logs
//   console.log(response)
//   console.log(response.weather)

//   // Variables
//   var k = (response.main.temp)
//   var f = (k - 273.15) * 1.8 + 32;
//   console.log(f)
//   var h = (response.main.humidity)
//   var w = (response.wind.speed)

//   //  Appendages
//   $(".temp").append(f)
//   $(".humidity").append(h)
//   $(".windSpeed").append(w)
// });


// clickCityItem()