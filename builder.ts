class WeatherUrl {

    private key: string;
    private strs: string[];
    private baseUrl: string;
    constructor() {
        this.key = '1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
        this.strs = [];
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    }
    appendQuery(str: string) {
        this.strs.push('q='+str);
    }
    appendUnits(str: string) {
        this.strs.push('units='+str);
    }
    appendLang(str: string) {
        this.strs.push('lang='+str);
    }
    appendMode(str: string) {
        this.strs.push('mode='+str);
    }
    appendKey() {
        this.strs.push('appid='+this.key);
    }
    builder(): string {
        return this.baseUrl+this.strs.join('&');
    }
}

const WEATHER_URL = new WeatherUrl();

WEATHER_URL.appendQuery('London');
WEATHER_URL.appendUnits('Metric');
WEATHER_URL.appendLang('english');
WEATHER_URL.appendMode('html');
WEATHER_URL.appendKey();


console.log(WEATHER_URL.builder());