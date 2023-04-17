import CONFIG from "../global/CONFIG"

const PAGE = {
  index: `
  <div class="bg-transparent w-screen h-screen flex place-content-center place-items-center">
    <button id="${CONFIG.BUTTON_ID}" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">:v</button>

  </div>
  `
}

export default PAGE
