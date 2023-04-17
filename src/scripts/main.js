import './swUtils'
import '../stylesheet/tailwind.css'

import App from './app'
import CONFIG from './global/CONFIG'

import PAGE from './page/page'

const app = new App({
  appContainer: document.getElementById('app'),
  apiUrl: CONFIG.BASE_API_URL,
  bgUrl: CONFIG.BG_URL,
  pageContent: PAGE.index
})

window.addEventListener('DOMContentLoaded', () => {
  app.render()
})
