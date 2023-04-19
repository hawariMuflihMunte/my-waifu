import CONFIG from "../global/CONFIG"

const PAGE = {
  index: `
  <div class="bg-transparent w-screen h-screen flex place-content-center place-items-center">
    <div class="flex-col">
      <div id="${CONFIG.GENERATOR_IMAGE_CONTAINER_ID}" class="max-w-xs sm:max-w-lg md:max-w-2xl"></div>
      <button id="${CONFIG.BUTTON_ID}" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">:v</button>
    </div>
  </div>
  `
}

export default PAGE
