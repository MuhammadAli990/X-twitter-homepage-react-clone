
function TextTweet(props) {
    const {image,name,unique,time,text} = props;

  return (
    <div className="flex gap-4 px-2 py-4 border-b border-gray-600">
      <div>
        <img src={image} alt="loading error" className="w-11 h-10 rounded-full" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-1">
            <h1 className="font-bold">{name}</h1>
            <p className="font-extralight text-gray-400">{unique}</p>
            <p className="text-gray-400 font-bold">·</p>
            <p className="font-extralight text-gray-400">{time}</p>
        </div>

        <div>
            <p>{text}</p>
        </div>

        <div className="flex justify-between px-4 sm:px-10 text-lg text-gray-500 mt-2">
            <i class="fa-regular flex gap-2 fa-message hover:text-blue-400"><p className="text-xs">1k</p></i>
            <i class="fa-solid flex gap-2 fa-retweet hover:text-blue-400"><p className="text-xs">1k</p></i>
            <i class="fa-regular flex gap-2 fa-heart hover:text-red-600"><p className="text-xs">1k</p></i>
            <i class="fa-solid flex gap-2 fa-chart-simple hover:text-blue-400"><p className="text-xs">1k</p></i>
        </div>
      </div>
    </div>
  )
}

export default TextTweet
