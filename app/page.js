import Collection from "@/content/Home/Collection";
import Herosection from "@/content/Home/HeroSection/Herosection"
import Popular from "@/content/Home/Popular";
import TopRated from "@/content/Home/Season";
import Trending from "@/content/Home/Trending";
import WatchHistory from "@/content/Home/WatchHistory";
import { getTrendingMovies, getTopRatedMovies } from "@/lib/MoviesFunctions";

const Home = async () => {
  const [trendingdata, top_rateddata] = await Promise.all([
    getTrendingMovies(),
    getTopRatedMovies()
  ]);

  return (
    <>
      <Herosection data={trendingdata} />

      <div className="w-full flex flex-col items-center z-10 relative main-responsive">
        <Trending data={trendingdata} />
        <WatchHistory />
        <Collection />
        <Popular />
        <TopRated data={top_rateddata} />
      </div>

      {/* background */}
      <div className="fixed w-[138.33px] h-[82.25px] left-[1%] top-[2%] bg-[#92b7fc8f] blur-[200px]"></div>
      <div className="fixed w-[500px] h-[370.13px] right-[50%] bottom-[20%] bg-[#576683b4] blur-[215.03px] translate-x-[70%] z-0 rounded-full"></div>
    </>
  )
}

export default Home