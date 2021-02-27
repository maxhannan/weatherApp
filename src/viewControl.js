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
  const hiF = weatherData.sevenDay[0].highF
  const hiC = weatherData.sevenDay[0].highC
  const loF = weatherData.sevenDay[0].lowF
  const loC = weatherData.sevenDay[0].lowC
  
  forecastContainer.innerHTML = `
  <br>
  <div id="tempContainer">
  <h1 id = 'tempReadout'>
  <span class = 'changer' 
  data-fahrenheitstr = '${daily.tempF}</span><span style = "color: #ec6e4c">°</span>f' 
  data-celsiusstr = '${daily.tempC}</span><span style = "color: #ec6e4c">°</span>c'>
  ${daily.tempF}<span style = "color: #ec6e4c">°</span>f</span></h1>
  <img id = 'status'  class = 'changer' src=${daily.iconSrc} alt="">
  </div>
  <br>
  <h2 id = 'weatherDescrip' style ='color: #ec6e4c'>${daily.descrip}</h2>
  <br>
  <h2 id = ''>
    <span 
      class = 'changer' 
      data-celsiusStr = '${loC}°c  /  ${hiC}°c'
      data-fahrenheitStr = '${loF}°f  /  ${hiF}°f'>
      ${loF}°f  /  ${hiF}°f
    </span>
  </h2>
  <br>
  <h2 id = 'location'>${daily.location}</h2>
  `
  renderSevenDayForecast(weatherData)
  const changers = document.querySelectorAll('.changer')
  changers.forEach(changer => changer.addEventListener('click', handleChange))
}
// builds seven day forecast section
const renderSevenDayForecast = async (weatherData) => {
  const sevenDays = weatherData.sevenDay
  for (let i = 1; i < sevenDays.length; i++) {
    const dayDisplay = document.createElement('div')
    const hiF = sevenDays[i].highF
    const hiC = sevenDays[i].highC
    const loF = sevenDays[i].lowF
    const loC = sevenDays[i].lowC
    dayDisplay.className = 'dayForecast'
    dayDisplay.innerHTML = `
      <div id = 'sevenDay'>
        <h3>${sevenDays[i].day}</h3> 
      </div>
      <div id = 'sevenHiLo'>
      <h3>
        <span class = 'changer' 
          data-celsiusStr = '${loC}°c  /  ${hiC}°c'
          data-fahrenheitStr = '${loF}°f  /  ${hiF}°f'>
          ${loF}°f  /  ${hiF}°f
        </span>
      </h3>
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
// handles unit change
const handleChange = async(e) => {
  console.log(e.target)
  const changers = document.querySelectorAll('.changer')
  changers.forEach(changer => changer.classList.toggle('hiddenTemp'))
  await sleep(600)
  changers.forEach(changer => {
    if (changer.innerHTML.includes('f')) {
      changer.innerHTML = changer.dataset.celsiusstr
    } else {
      changer.innerHTML = changer.dataset.fahrenheitstr
    }
  })
  changers.forEach(changer => changer.classList.toggle('hiddenTemp'))
}
export {
  renderForecast,
  sleep,
  clearScreen
}
