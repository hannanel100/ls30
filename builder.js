var WeatherUrl = /** @class */ (function () {
    function WeatherUrl() {
        this.key = '1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
        this.strs = ['http://api.openweathermap.org/data/2.5/weather?'];
    }
    WeatherUrl.prototype.appendQuery = function (str) {
        this.strs.push('q=' + str);
    };
    WeatherUrl.prototype.appendUnits = function (str) {
        this.strs.push('units=' + str);
    };
    WeatherUrl.prototype.appendLang = function (str) {
        this.strs.push('lang=' + str);
    };
    WeatherUrl.prototype.appendMode = function (str) {
        this.strs.push('mode=' + str);
    };
    WeatherUrl.prototype.appendKey = function () {
        this.strs.push('appid=' + this.key);
    };
    WeatherUrl.prototype.builder = function () {
        return this.strs.join('&');
    };
    return WeatherUrl;
}());
var WEATHER_URL = new WeatherUrl();
WEATHER_URL.appendQuery('London');
WEATHER_URL.appendUnits('Metric');
WEATHER_URL.appendLang('english');
WEATHER_URL.appendMode('html');
WEATHER_URL.appendKey();
WEATHER_URL.builder();
console.log(WEATHER_URL.builder());
