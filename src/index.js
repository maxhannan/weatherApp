import './sass/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
import getWeather from './weatherGetter'
import { renderForecast, clearScreen } from './viewControl'

const srchBar = document.querySelector('#searchBar')
const srchBtn = document.querySelector('#srchBtn')

const handleSubmit = async (e) => {
  e.preventDefault()
  let data
  srchBar.style.color = 'white'
  try {
    clearScreen()
    data = await getWeather(srchBar.value)
  } catch (error) {
    srchBar.style.color = 'red'
    console.log(error)
    return
  }
  renderForecast(data)
  srchBar.value = ''
  console.log(data)
}
// inital pageLoad Function
const pageLoad = async () => {
  const data = await getWeather('Minneapolis')
  renderForecast(data)
}
pageLoad()
srchBtn.addEventListener('click', handleSubmit)
