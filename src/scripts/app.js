class App {
  constructor ({
    bodyElement,
    appContainer,
    bgUrl,
    pageContent,
    generatorResult
  }) {
    this._bodyElement = bodyElement
    this._appContainer = appContainer
    this._bgUrl = bgUrl
    this._pageContent = pageContent
    this._generatorResult = generatorResult
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
}

export default App
