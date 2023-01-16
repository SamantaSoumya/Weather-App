const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bcc88e0e8mshe235a81aefa649fp1177efjsn609c01fc0c57',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degree
			sunrise.innerHTML = new Date(1000 * response.sunrise).toLocaleTimeString()
			sunset.innerHTML = new Date(1000 * response.sunset).toLocaleTimeString()
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


getWeather("Balichak")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		mumbai_cloud_pct.innerHTML = response.cloud_pct
		mumbai_temp.innerHTML = response.temp
		mumbai_humidity.innerHTML = response.humidity
		mumbai_min_temp.innerHTML = response.min_temp
		mumbai_max_temp.innerHTML = response.max_temp
		mumbai_wind_speed.innerHTML = response.wind_speed
		mumbai_wind_degrees.innerHTML = response.wind_degrees
		mumbai_sunrise.innerHTML = new Date(1000 * response.sunrise).toLocaleTimeString()
		mumbai_sunset.innerHTML = new Date(1000 * response.sunset).toLocaleTimeString()
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		london_cloud_pct.innerHTML = response.cloud_pct
		london_temp.innerHTML = response.temp
		london_humidity.innerHTML = response.humidity
		london_min_temp.innerHTML = response.min_temp
		london_max_temp.innerHTML = response.max_temp
		london_wind_speed.innerHTML = response.wind_speed
		london_wind_degrees.innerHTML = response.wind_degrees
		london_sunrise.innerHTML = new Date(1000 * response.sunrise).toLocaleTimeString()
		london_sunset.innerHTML = new Date(1000 * response.sunset).toLocaleTimeString()
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Medinipur', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		medinipur_cloud_pct.innerHTML = response.cloud_pct
		medinipur_temp.innerHTML = response.temp
		medinipur_humidity.innerHTML = response.humidity
		medinipur_min_temp.innerHTML = response.min_temp
		medinipur_max_temp.innerHTML = response.max_temp
		medinipur_wind_speed.innerHTML = response.wind_speed
		medinipur_wind_degrees.innerHTML = response.wind_degrees
		medinipur_sunrise.innerHTML = new Date(1000 * response.sunrise).toLocaleTimeString()
		medinipur_sunset.innerHTML = new Date(1000 * response.sunset).toLocaleTimeString()
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		kolkata_cloud_pct.innerHTML = response.cloud_pct
		kolkata_temp.innerHTML = response.temp
		kolkata_humidity.innerHTML = response.humidity
		kolkata_min_temp.innerHTML = response.min_temp
		kolkata_max_temp.innerHTML = response.max_temp
		kolkata_wind_speed.innerHTML = response.wind_speed
		kolkata_wind_degrees.innerHTML = response.wind_degrees
		kolkata_sunrise.innerHTML = new Date(1000 * response.sunrise).toLocaleTimeString()
		kolkata_sunset.innerHTML = new Date(1000 * response.sunset).toLocaleTimeString()
	})
	.catch(err => console.error(err));
