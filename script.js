
async function getWeather(city, apikey, units="metric") {
        
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`
  
    const res = await fetch(path) 
    const json = await res.json()
    
    return json
  }
      
      const inputCity = document.getElementById('input-city')
      const form = document.getElementById('form')
      const cityName = document.getElementById('city')
      const tempDisplay = document.getElementById('temp-display')
      const weatherDesc = document.getElementById('weather-description')
      const lowTemp = document.getElementById ('low-temp')
      const highTemp = document.getElementById('high-temp')
      
       
      
      form.addEventListener('submit', (event) => {
         event.preventDefault()
         const apikey = 'f4b27ffc64aff7046b5859c92dff27a5'
         const city = inputCity.value
     
      getWeather(city, apikey).then((json) => {
          var icon 
  
          cityName.innerHTML = json.name 
          tempDisplay.innerHTML = Math.round(json.main.temp) + " °C"
          weatherDesc.innerHTML = json.weather[0].description 
          icon = json.weather[0].icon 
          lowTemp.innerHTML = "Min " + Math.round(json.main.temp_min) + " °C"
          highTemp.innerHTML = "Max " + Math.round(json.main.temp_max) + " °C"
  
          console.log(json); //for testing
  
          if (icon === "04n") {
              document.body.style.background="url('img/storm.jpg')";
            } else {
              document.body.style.background="url('img/bg.jpg')";
            }
  
  
      }).catch((error) => {
         console.log(error.message)
          //.catch(() => alert("Please enter a real city!")); 
      }) 
  })
  
  const date = new Date().toLocaleDateString()
  document.getElementById("date").innerHTML = date;
  
  /*if (icon === "04n") {
      console.log("sunny");
    } else {
      console.log("not sunny");
    }
    */    
      
   
      
  
  
  
  
  
  
  