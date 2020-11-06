const url = 'https://fcc-weather-api.glitch.me/api/current?'

async function getData(locationName, lat, lon, maps) {
  const weatherDiv = document.querySelector("#weather");
  const mapsInfo= document.querySelector('#maps');

  weatherDiv.innerHTML = "";
  // mapsInfo.innerHTML="";

  try {
    const response = await fetch(`${url}lat=${lat}&lon=${lon}`);
    console.log("response", response);
    const dataAPI = await response.json();
    console.log("dataAPI", dataAPI);
    
      // < < IN CASE OF MISSINFORMATION > >
    if(dataAPI.name === "Shuzenji") {
      const weatherh2tagProve = document.createElement("h2");
      weatherh2tagProve.className = 'animate__animated animate__backInDown';
      weatherh2tagProve.textContent = `Sorry, please try again.`
      weatherDiv.appendChild(weatherh2tagProve);
      // mapsInfo.innerHTML='';

    } else {
      // < < LOCATION NAME > >
      const locationNameh2Tag = document.createElement("h2");
      locationNameh2Tag.className = 'animate__animated animate__flash';
      locationNameh2Tag.textContent = locationName.toUpperCase ();
      weatherDiv.appendChild(locationNameh2Tag);

      // < < WEATHER DESCRIPTION > >
      const weatherStatus = dataAPI.weather[0].description;
      const weatherh2tag = document.createElement("h3");
      weatherh2tag.className = 'animate__animated animate__backInDown';
      weatherh2tag.textContent = weatherStatus.toUpperCase ();
      weatherDiv.appendChild(weatherh2tag);
      
      // < < WEATHER ICON > >
      const weatherIcon = document.createElement('img');
      const weatherIconURL = dataAPI.weather[0].icon;
      weatherIcon.setAttribute('src', weatherIconURL); 
      weatherDiv.appendChild(weatherIcon);
  
      // < < TEMP > >
      const tempAPI = dataAPI.main.temp;
      const temp = document.createElement("p");
      temp.textContent = `Temperature: ${tempAPI}°C`
      weatherDiv.appendChild(temp);
  
      // < < TEMP SENSATION > >
      const tempSensationAPI = dataAPI.main.feels_like;
      const tempSensation = document.createElement("p");
      tempSensation.textContent = `Temperature sensation: ${tempSensationAPI}°C`
      weatherDiv.appendChild(tempSensation);
  
      // < < TEMP MAX > >
      const tempMaxAPI = dataAPI.main.temp_max;
      const tempMax = document.createElement("p");
      tempMax.textContent = `Temperature Max: ${tempMaxAPI}°C`
      weatherDiv.appendChild(tempMax);
  
      // < < TEMP MIN> >
      const tempMinAPI = dataAPI.main.temp_min;
      const tempMin = document.createElement("p");
      tempMin.textContent = `Temperature Min: ${tempMinAPI}°C`
      weatherDiv.appendChild(tempMin);
  
      // < < WIND SPEED > >
      const windSpeed = dataAPI.wind.speed;
      const windSpeedPTag = document.createElement("p");
      windSpeedPTag.textContent = `Wind speed: ${windSpeed} km/h`;
      weatherDiv.appendChild(windSpeedPTag);
  
      // < < WIND DIRECTION > >
      const windDirection = dataAPI.wind.deg;
      const windDirectionPTag = document.createElement("p");
      function getCardinalDirection(angle) {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8];
      }
      const cardinalDirection = getCardinalDirection(windDirection)
      windDirectionPTag.textContent = `Wind direction: ${windDirection}° ${cardinalDirection}`;
      weatherDiv.appendChild(windDirectionPTag);
      
      // < < HUMIDITY > >
      const humidityAPI = dataAPI.main.humidity;
      const humidity = document.createElement("p");
      humidity.textContent = `Humidity: ${humidityAPI}%`
      weatherDiv.appendChild(humidity);
  
      // < < PREASSURE > >
      const pressureAPI = dataAPI.main.pressure;
      const pressure = document.createElement("p");
      pressure.textContent = `Preassure: ${pressureAPI} mb`
      weatherDiv.appendChild(pressure);

      // < < MAPS > >
      const mapsDisplay = document.createElement("div");
      mapsDisplay.innerHTML = `<iframe src="${maps}" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
      weatherDiv.appendChild(mapsDisplay);

    }



  } catch (err) {
    console.log(err);
  }
}
