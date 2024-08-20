import Account from "./Account"
import Trending from "./Trending"

function Sidebar2() {
  return (
    <div className="hidden md:flex flex-col gap-2">
      <div>
        <input type="text" placeholder="Search" className="px-4 py-1 appearance-none bg-slate-700 outline-none focus:outline-none focus:ring-0 rounded-full w-full" />
      </div>

      <div className="flex flex-col gap-2 bg-slate-800 rounded-lg p-2">
        <h1 className="text-xl font-bold ">Whats Happening</h1>
        <Trending hashtag = "Gold medal" noOfPosts = "100.7k"/>
        <Trending hashtag = "Arshad Nadeem" noOfPosts = "154.1k"/>
        <Trending hashtag = "Olympics" noOfPosts = "78.5k"/>
      </div>

      <div className="flex flex-col gap-3 bg-slate-800 rounded-lg p-2">
        <h1 className="text-xl font-bold">Who to follow</h1>
        <div className="flex flex-col gap-4">
          <Account profileImage="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" name="React" unique="@react"/>
          <Account profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s" name="three.js" unique="@threejs"/>
          <Account profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s" name="Mongo" unique="@MongoDB"/>
        </div>
      </div>

    </div>
  )
}

export default Sidebar2
