class App {
  constructor ({
    appContainer,
    apiUrl,
    bgUrl,
    pageContent
  }) {
    this._appContainer = appContainer
    this._apiUrl = apiUrl
    this._bgUrl = bgUrl
    this._pageContent = pageContent
  }

  render() {
    this._appContainer.innerHTML = this._pageContent

    if (this._bgUrl === '' || null) {
      document.querySelector('body').style.backgroundImage = this._bgUrl
    }
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
