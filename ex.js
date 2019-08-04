function sendToWeather(selectedCity, callback) {
    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=f6f55705bfcd84b4da4d6829ad8c65d8 ';
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var obj = JSON.parse(this.responseText)
                console.log(obj);
                callback(obj);
            }
        }
    };
    req.open("GET", url);
    req.send();
}


let citiesWeatherObjArray = [];
sendToWeather('jerusalem', function(o){
    weather.innerHTML += '<div class="box">' + o.name + ': ' + o.main.temp + '<div>';
    sendToWeather('paris', function(o){
        weather.innerHTML += '<div class="box">' + o.name + ': ' + o.main.temp + '<div>';
        sendToWeather('stockholm', function(o){
            weather.innerHTML += '<div class="box">' + o.name + ': ' + o.main.temp + '<div>';
            sendToWeather('berlin', function(o){
                weather.innerHTML += '<div class="box">' + o.name + ': ' + o.main.temp + '<div>';
            });
        });
    });
});

