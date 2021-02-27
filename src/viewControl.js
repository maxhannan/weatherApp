const forecastContainer = document.querySelector('#mainForecast')
const renderMainForecast = (weatherData) => {
  const daily = weatherData.daily
  forecastContainer.innerHTML = `
  <h2 id = 'location'>${daily.location}</h2>
  <br><br>
  <h2 id = 'weatherDescrip' style ='color: #ec6e4c'>${daily.descrip}</h2>
  <div id="tempContainer">
    <h1 id = 'tempReadout'>${daily.tempF + '<span style = "color: #ec6e4c">°</span>f'}</h1>
    <img id = 'status' src=${daily.iconSrc} alt="" >
  </div>
  `
}
export default renderMainForecast
