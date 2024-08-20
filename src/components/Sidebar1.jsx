import Option from "./Option";
import Profile from "./Profile";

function Sidebar1() {
  return (
    <div className="flex flex-col gap-8 sm:gap-4">
      <div className="h-10 w-10 flex justify-center items-center">
        <i className="fa-brands fa-x-twitter fa-2xl"></i>
      </div>

      <div className="flex flex-col gap-10 sm:gap-4 pl-2">
        <Option image = "fa-solid fa-house fa-lg" text="Home"/>
        <Option image = "fa-solid fa-magnifying-glass fa-lg" text="Explore"/>
        <Option image="fa-regular fa-bell fa-lg" text="Notifications"/>
        <Option image="fa-regular fa-message fa-lg" text="Grok"/>
        <Option image="fa-solid fa-list-ul fa-lg" text="Lists"/>
        <Option image="fa-regular fa-bookmark fa-lg mr-1" text="Bookmarks"/>
        <Option image="fa-solid fa-user-group fa-md" text="Notifications"/>
        <Option image="fa-regular fa-credit-card fa-lg" text="Premium"/>
        <Option image="fa-regular fa-user fa-lg" text="Profile"/>
        <Option image="fa-solid fa-ellipsis fa-lg" text="More"/>
      </div>

      <div>
        <button className="hidden sm:flex px-2 sm:px-16 py-2 bg-blue-500 rounded-full font-bold hover:bg-blue-700 duration-200">Post</button>
        <button className="flex sm:hidden px-2 sm:px-16 py-2 bg-blue-500 rounded-full font-bold"><i class="fa-solid fa-paper-plane fa-xl"></i></button>
      </div>

      <div className="mt-auto">
        <Profile name="Muhammad Ali" id="@constant9k" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"/>
      </div>
    </div>
  );
}

export default Sidebar1;
