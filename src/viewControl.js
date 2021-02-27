const forecastContainer = document.querySelector('#mainForecast')
const infoContainer = document.querySelector('#infoHolder')

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
const clearScreen = () => {
  forecastContainer.innerHTML = ''
  infoContainer.innerHTML = ''
}
const renderForecast = (weatherData) => {
  const daily = weatherData.daily
  forecastContainer.innerHTML = `
  <br>
  <div id="tempContainer">
    <h1 id = 'tempReadout'>${daily.tempF + '<span style = "color: #ec6e4c">°</span>f'}</h1>
    <img id = 'status' src=${daily.iconSrc} alt="" >
  </div>
  <br>
  <h2 id = 'weatherDescrip' style ='color: #ec6e4c'>${daily.descrip}</h2>
  <br>
  <h2 id = ''>${weatherData.sevenDay[0].lowF}°f  /  ${weatherData.sevenDay[0].highF}°f</h2>
  <br>
  <h2 id = 'location'>${daily.location}</h2>
  `
  renderSevenDayForecast(weatherData)
}

const renderSevenDayForecast = async (weatherData) => {
  const sevenDays = weatherData.sevenDay
  for (let i = 1; i < sevenDays.length; i++) {
    const dayDisplay = document.createElement('div')
    dayDisplay.className = 'dayForecast'
    dayDisplay.innerHTML = `
      <div id = 'sevenDay'>
        <h3>${sevenDays[i].day}</h3> 
      </div>
      <div id = 'sevenHiLo'>
        <h3>${sevenDays[i].lowF}°f  /  ${sevenDays[i].highF}°f</h3>
      </div>
      <div id = 'descripW'>
        <h3>${sevenDays[i].descrip}</h3>
      </div>
      <div id = 'sevenicon'>
      <img id = 'iconW' src=${sevenDays[i].iconSrc}>
      </div>
    `
    infoContainer.appendChild(dayDisplay)
    await sleep(100)
  }
}
export {
  renderForecast,
  sleep,
  clearScreen
}
