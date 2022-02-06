function fahrenheitToCelsius(fahrenheit) {
    var temparatue = (fahrenheit - 32) * 5 / 9;
    return temparatue;
}
var myFahrenheit = 100;
var weather = fahrenheitToCelsius(myFahrenheit);
console.log(weather + '°F The weather is very good');