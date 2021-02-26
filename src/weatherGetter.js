import getName from './geoCode'

const apiKey = '070d5b93cd86e7baa71b2a5bf2276467'
let lat,lon
const initalCall = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  const response = await fetch(url, { mode: 'cors' })
  const data = await response.json()
  const d = oneCall(data.coord)
  return d
}
const oneCall = async (coords) => {
  lon = coords.lon
  lat = coords.lat
  const oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
  const response = await fetch(oneCallURL, { mode: 'cors' })
  const data = await response.json()
  return data
}

const getWeather = async (city) => {
  let info, name

  try {
    info = await initalCall(city)
    name = await getName(lat, lon)
  } catch (error) {
    console.warn('Something Went wrong with the weatherGetter.js functions')
    console.log(error)
    return
  }
  const current = info.current
  const sevenDayForecast = info.daily.map(day => {
    const dayinfo = {
      day: weekDay[getDay(day.dt).getDay()],
      highC: toCelsius(day.temp.max),
      lowC: toCelsius(day.temp.min),
      highF: toFahrenheit(day.temp.max),
      lowF: toFahrenheit(day.temp.min),
      weather: day.weather
    }
    return dayinfo
  }).slice(1, 8)

  const weatherData = {
    daily: {
      location: name,
      time: getDay(current.dt),
      timeStr: getDay(current.dt).toLocaleTimeString(),
      day: weekDay[getDay(current.dt).getDay()],
      tempC: toCelsius(current.temp),
      tempF: toFahrenheit(current.temp),
      wind: current.wind_speed,
      windDir: current.wind_deg,
      sunrise: getDay(current.sunrise).toLocaleTimeString(),
      humidity: current.humidity,
      descrip: current.weather
    },
    sevenDay: [...sevenDayForecast]
  }
  return weatherData
}

// HELPER FUNCTIONS
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const toCelsius = (K) => Math.floor(K - 273.15)
const toFahrenheit = (K) => Math.floor(toCelsius(K) * (9 / 5) + 32)
const getDay = (date) => new Date(date * 1000)

export default getWeather
