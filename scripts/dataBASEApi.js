const url = 'https://fcc-weather-api.glitch.me/api/current?'

async function getData(lat, lon) {
  const weatherDiv = document.querySelector("#weather");
  weatherDiv.innerHTML = "";
 
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
    } else {
      // < < WEATHER DESCRIPTION > >
      const weatherStatus = dataAPI.weather[0].description;
      const weatherh2tag = document.createElement("h2");
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

    }



  } catch (err) {
    console.log(err);
  }
}






// const mapsDiv = document.querySelector("#maps");
// mapsDiv.innerHTML = "";

// document.querySelector("#montserrat").addEventListener("click", mapsAppear);

 
// function mapsAppear () {
//   let montserratMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.8769861005367!2d1.8373248!3d41.59354390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM1JzM2LjgiTiAxwrA1MCcxNC40IkU!5e0!3m2!1ses-419!2ses!4v1604535163545!5m2!1ses-419!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
//   mapsDiv.innerHTML = montserratMap;

// }

// id="monteBrento"
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.188228760602!2d10.895803299999999!3d45.9874709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDU5JzE0LjkiTiAxMMKwNTMnNDQuOSJF!5e0!3m2!1ses-419!2ses!4v1604545790863!5m2!1ses-419!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

// id="huesca"
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.703344746244!2d-0.049369684953844896!3d42.30619497919053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE4JzIyLjMiTiAwwrAwMic0OS45Ilc!5e0!3m2!1ses-419!2ses!4v1604545946086!5m2!1ses-419!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

// id="millau"
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.2991917850513!2d3.0169993151148105!3d44.07717797910907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b24a26901e27d1%3A0xd68c6a0fa2bec6e4!2sViaducto%20de%20Millau!5e0!3m2!1ses-419!2ses!4v1604546226855!5m2!1ses-419!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

// id="midiDOssau"
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11700.32848970623!2d-0.44208806824446384!3d42.84999911651021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5797e9a44e5e9f%3A0xe0ec96d39801b9df!2sPico%20de%20Midi%20d&#39;Ossau!5e0!3m2!1ses-419!2ses!4v1604546303922!5m2!1ses-419!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>