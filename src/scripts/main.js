import './swUtils'
import '../stylesheet/tailwind.css'

import App from './app'
import CONFIG from './global/CONFIG'
import PAGE from './page/page'
import Generator from './generator'

const app = new App({
  bodyElement: document.querySelector('body'),
  appContainer: document.getElementById('app'),
  apiUrl: CONFIG.BASE_API_URL,
  bgUrl: CONFIG.BG_URL,
  pageContent: PAGE.index
})

window.addEventListener('DOMContentLoaded', () => {
  app.render()
  Generator.init({
    button: document.getElementById(CONFIG.BUTTON_ID)
  })
})
