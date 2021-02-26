import './sass/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
import loader from './loader'
import testerArrow from './tesetArrow'
import getWeather from './weatherGetter'

const app = document.querySelector('#app')

const loadIcon = loader()
app.appendChild(loadIcon)

const testArrow = testerArrow()
app.appendChild(testArrow)

const weatherTest = async () => {
  const test = prompt('test')
  const data = await getWeather(test)
  const rotate = `rotate(${data.daily.windDir}deg)`
  console.log(data)

  document.querySelector('#arrow').style.transform = rotate
}
window.addEventListener('click', weatherTest)
