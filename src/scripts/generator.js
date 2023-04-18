const Generator = {
  init ({
    button,
    api,
    container,
    options = {
      type: 'sfw',
      category: 'waifu'
    }
  }) {
    this._button = button
    this._api = api
    this._container = container
    this._options = options

    this._button.addEventListener('click', () => {
      this.generateWaifu(options)
    })
  },
  async generateWaifu ({
    type = 'sfw',
    category = 'waifu'
  }) {
    console.log('clicked')

    try {
      const waifuImageUrl = await fetch(`${this._api}${type}/${category}`)
      const waifuImage = await waifuImageUrl.json()

      const waifuResult = this.createWaifuImage(waifuImage.url)
      console.log(waifuResult)

      document.getElementById(this._container).appendChild(waifuResult)
    } catch (error) {
      console.log(error)
      return false
    }
  },
  createWaifuImage (src) {
    const waifuImageContainer = document.createElement('img')
    waifuImageContainer.src = src
    waifuImageContainer.loading = 'eager'
    waifuImageContainer.style.objectFit = 'cover'
    waifuImageContainer.style.objectFit = 'right top'
    waifuImageContainer.style.height = 'auto'
    waifuImageContainer.style.maxWidth = '100%'

    return waifuImageContainer
  }
}

export default Generator
