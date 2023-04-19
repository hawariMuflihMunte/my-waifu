import CONFIG from "../global/CONFIG"

const PAGE = {
  index: `
  <div class="bg-transparent w-screen h-screen flex place-content-center place-items-center">
    <div class="flex-col max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm text-center">
      <div id="${CONFIG.GENERATOR_IMAGE_CONTAINER_ID}" class="w-full border-collapse border-2 border-sky-300 text-center mb-4">💕</div>
      <button id="${CONFIG.BUTTON_ID}" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">:v</button>
    </div>
  </div>
  `
}

export default PAGE
