
function InputTweet(props) {
  const {image} = props
  return (
    <div className="flex gap-4 px-2 py-4 border-b border-gray-600">
      <div>
        <img src={image} alt="loading error" className="w-11 h-10 rounded-full" />
      </div>

      <div className="flex flex-col w-full gap-4">
        <input type="text" className="appearance-none bg-transparent outline-none focus:outline-none focus:ring-0" />

        <div className="mt-1 text-blue-400 flex items-center font-semibold text-sm gap-2 border-b border-gray-600 pb-4">
            <i class="fa-solid fa-earth-americas"></i>
            <p>Everyone can reply</p>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex text-blue-400 gap-2 text-lg cursor-pointer">
                <i class="fa-regular fa-image"></i>
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-regular fa-calendar"></i>
                <i class="fa-solid fa-location-dot"></i>
                <i class="fa-solid fa-microphone"></i>
            </div>

            <div>
                <button className="px-6 py-2 bg-blue-500 rounded-full font-semibold hover:bg-blue-700 duration-200">Post</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InputTweet
