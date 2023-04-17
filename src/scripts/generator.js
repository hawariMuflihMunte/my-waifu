const Generator = {
  init ({
    button
  }) {
    this._button = button

    this._button.addEventListener('click', this.generateWaifu)
  },
  async generateWaifu (target) {
    console.log(target)
  }
}

export default Generator
