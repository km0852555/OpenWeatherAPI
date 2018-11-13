var httpRequest = new XMLHttpRequest();

var cityZip = 65804;

httpRequest.open("get","solar.php");
httpRequest.send(null);
httpRequest.onreadystatechange = loadWeather;

function loadWeather()
{
    if(httpRequest.readyState == 4 && httpRequest.status == 200)
    {
        var weather = JSON.parse(httpRequest.responseText);

        document.getElementById("cityName").innerHTML = weather.name;
        document.getElementById("weatherType").innerHTML = weather.weather[0].main;
        document.getElementById("temperature").innerHTML = weather.main.temp + "&deg;" ;
        document.getElementById("humidity").innerHTML = weather.main.humidity + "% Humidity";

    }
}