import './sass/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
import loader from './loader'
const app = document.querySelector('#app')
const loadIcon = loader()
app.appendChild(loadIcon)
