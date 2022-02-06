function celciusToFahrenheit(celcius) {
    var temp = celcius * 1.8 + 32;
    return temp;
}
var celsius = 20;
var weather = celciusToFahrenheit(celsius);
console.log(weather + '°C The Weather is good!!');


