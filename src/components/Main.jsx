import ImageTweet from "./ImageTweet"
import InputTweet from "./InputTweet"
import TextTweet from "./TextTweet"

function Main() {
  return (
    <div className="flex flex-col gap-2  max-w-[500px] w-full max-h-screen">
      <div className="flex justify-center gap-14 md:gap-32 border-b border-gray-600 pb-2">
        <div className="text-lg font-semibold">For You</div>
        <div className="text-lg font-semibold">Following</div>
      </div>

      <div className="flex flex-col overflow-y-auto hide-scrollbar max-h-screen">
        <InputTweet image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s" />
        <TextTweet image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGpxfT36wkDrRo74u8Pg24euaiIfYO4Zi9A&s' name="Nasa" unique="@nasa" text="We used to have 9 planets, but then one of them called in sick. So, we're down to 8. Pluto says it's 'just a phase.'😂🪐" time="1h"/>
        <ImageTweet image="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/works-doesnt-work.jpg" profileImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvsVQrSCAVs_2NTkObozPLOWFzwLAd6TRig&s' name="DevJokesDaily" unique="@elonmusk13" text="Why?" time="8h"/>
        <TextTweet image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1-tiy7YDb83_KFy-AySQBYfkuEAN75tg5Q&s' name="Shay Friedman" unique="@ironshay" text="Why do backend developers never get tired? They develop REST api's." time="4h"/>
       
      </div>

    </div>
  )
}

export default Main
