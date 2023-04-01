var date = moment().format("dddd, MMMM Do YYYY");
var dateTime = moment().format("MM-DD-YYYY HH:MM:SS");

var cityHist = [];
//Will save the text value of the search and save it to an array and storage
$(".search").on("click", function (event) {
  event.preventDefault();
  city = $(this).parent(".btnPar").siblings(".textVal").val().trim();
  if (city === "") {
    return;
  }
  cityHist.push(city);

  localStorage.setItem("city", JSON.stringify(cityHist));
  fiveForecastEl.empty();
  getHistory();
  getWeatherToday();
});
