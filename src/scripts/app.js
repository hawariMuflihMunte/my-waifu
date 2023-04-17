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
    // body
    this._bodyElement.style.backgroundImage = `url(${this._bgUrl})`
    this._bodyElement.style.backgroundSize = `100vw 100vh`
    this._bodyElement.style.backgroundPosition = 'right top'
    this._bodyElement.style.backgroundRepeat = 'no-repeat'

    // app
    this._appContainer.innerHTML = this._pageContent

    console.info(
      '%cApp',
      `
        background: rgb(0, 212, 232);
        color: navy;
        padding: 2px;
        border-radius: 3px
      `,
      'Successfully render page ✅'
    )
  }

  async renderImage ({
    type = 'sfw',
    category = 'waifu'
  }) {
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
      const waifuImageUrl = await fetch(`${this._apiUrl}${type}/${category}`)
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
