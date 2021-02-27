import getName from './geoCode'

const apiKey = '070d5b93cd86e7baa71b2a5bf2276467'

const oneCall = async (coords) => {
  // calls weather api with lat & lng
  const lon = coords.lng
  const lat = coords.lat
  const oneCallURL = `
  https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`

  const response = await fetch(oneCallURL, { mode: 'cors' })
  const data = await response.json()
  return data
}

const getWeather = async (city) => {
  // calls geocoding api and returns formatted address name &
  // lat and lng for weather call
  const nameData = await getName(city)
  const coords = nameData.geometry.location
  const name = nameData.formatted_address
  // calls weather api and retrieves data
  const info = await oneCall(coords)
  // calls formatting function which returns object of needed data
  const finalAnswer = weatherFormatter(info, name)
  // return final object
  return finalAnswer
}

const weatherFormatter = (info, placeName) => {
  const current = info.current

  const sevenDayForecast = info.daily.map(day => {
    const dayinfo = {
      day: weekDay[getDay(day.dt).getDay()],
      highC: toCelsius(day.temp.max),
      lowC: toCelsius(day.temp.min),
      highF: toFahrenheit(day.temp.max),
      lowF: toFahrenheit(day.temp.min),
      descrip: day.weather[0].description,
      iconSrc: getIconURL(day.weather[0].icon, false)
    }
    return dayinfo
  })

  const weatherData = {
    daily: {
      location: placeName,
      time: getDay(current.dt),
      timeStr: getDay(current.dt).toLocaleTimeString(),
      day: weekDay[getDay(current.dt).getDay()],
      tempC: toCelsius(current.temp),
      tempF: toFahrenheit(current.temp),
      wind: current.wind_speed,
      windDir: current.wind_deg,
      sunrise: getDay(current.sunrise).toLocaleTimeString(),
      humidity: current.humidity,
      descrip: current.weather[0].description,
      iconSrc: getIconURL(current.weather[0].icon)
    },
    sevenDay: [...sevenDayForecast]
  }
  console.log(info)
  return weatherData
}

// HELPER FUNCTIONS
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const toCelsius = (K) => Math.floor(K - 273.15)
const toFahrenheit = (K) => Math.floor(toCelsius(K) * (9 / 5) + 32)
const getDay = (date) => new Date(date * 1000) // converts unix timestamp to date
const getIconURL = (iconId, large = true) => { // retrieves appropiate icon url based on weather code from api
  let url
  if (large) {
    url = `http://openweathermap.org/img/wn/${iconId}@4x.png`
  } else {
    url = `http://openweathermap.org/img/wn/${iconId}@2x.png`
  }
  return url
}
export default getWeather
