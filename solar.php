<?php
$WeatherSource = "http://api.openweathermap.org/data/2.5/weather?zip=65804,us&units=imperial&appid=03a7c4bbb51fac1ceeccad3e528a7c65";
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>