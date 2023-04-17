class App {
  constructor ({
    bodyElement,
    appContainer,
    apiUrl,
    bgUrl,
    pageContent
  }) {
    this._bodyElement = bodyElement
    this._appContainer = appContainer
    this._apiUrl = apiUrl
    this._bgUrl = bgUrl
    this._pageContent = pageContent
  }

  render() {
    this._appContainer.innerHTML = this._pageContent
    this._bodyElement.style.backgroundImage = `url(${this._bgUrl})`
    this._bodyElement.style.backgroundSize = `100vw 100vh`
    this._bodyElement.style.backgroundPosition = 'right top'
    this._bodyElement.style.backgroundRepeat = 'no-repeat'

    console.log('Successfully render page ✅')
  }

  async renderImage () {
    const createWaifuImage = (src) => {
      const waifuImageContainer = document.createElement('img')
      waifuImageContainer.src = src
      waifuImageContainer.loading = 'eager'
      waifuImageContainer.style.objectFit = 'cover'
      waifuImageContainer.style.objectFit = 'right top'
      waifuImageContainer.style.height = 'auto'
      waifuImageContainer.style.maxWidth = '100%'
  
      return waifuImageContainer
    }
    
    try {
      const waifuImageUrl = await fetch(`${this._apiUrl}sfw/waifu`)
      const waifuImage = await waifuImageUrl.json()

      const waifuResult = createWaifuImage(waifuImage.url)

      return waifuResult
    } catch (error) {
      console.log(error)
      return false
    }
  }
}

export default App
