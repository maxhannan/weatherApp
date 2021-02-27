import './sass/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
import getWeather from './weatherGetter'
import renderMainForecast from './viewControl'

const srchBar = document.querySelector('#searchBar')
const srchBtn = document.querySelector('#srchBtn')

const handleSubmit = async (e) => {
  e.preventDefault()
  let data
  srchBar.style.color = 'black'
  try {
    data = await getWeather(srchBar.value)
  } catch (error) {
    srchBar.style.color = 'red'
    console.log(error)
    return
  }
  renderMainForecast(data)
  srchBar.value = ''
  console.log(data)
}
// inital pageLoad Function
const pageLoad = async () => {
  const data = await getWeather('Minneapolis')
  renderMainForecast(data)
}
pageLoad()
srchBtn.addEventListener('click', handleSubmit)
