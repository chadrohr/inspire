(function () {

	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		//console.log(weather);
		weather = JSON.parse(weather)
		//debugger//What can you do with this weather object?
		var place = weather.name
		var temp = parseInt(weather.main.temp)
		var condition = weather.weather[0].description
		var celTemp = temp - 273
		var ferTemp = parseInt(celTemp * 1.8 + 32)
		//console.log(place, temp, celTemp, ferTemp, condition)
		weatherElem = $('#weather');
		var template = `<h1>${place}</h1>
						<h3>${ferTemp}&degF;</h3>
						<h3>${celTemp}&degC;</h3>
						<h5>${condition}</h5>
						`
		weatherElem.append(template)
	})





} ())

// <div class="card text-center">
//             <p>${wc.weather.name}</p>
//             <p>${wc.weather.main.temp}</p>

//         </div>
