"use client"
import Card from "@/components/Cards/Card/Card"
import { getPopularMovies } from "@/lib/MoviesFunctions"
import { useEffect, useState } from "react"

const Popular = () => {
  const [page, setPage] = useState(1)
  const [popularData, setPopularData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getPopular = async () => {
      setLoading(true)
      const data = await getPopularMovies(page)
      setPopularData([...popularData, ...data?.results])
      setLoading(false)
    }
    getPopular()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className="w-full max-w-[96rem] relative bottom-28 mx-5 mt-16 max-[1270px]:-mt-2">
      <h1 className="text-[#ffffffbd] font-medium text-2xl font-['poppins']">| Most Popular</h1>


      <div className="mt-8 grid grid-auto-fit gap-3">
        {popularData?.map((item, index) => <Card data={item} key={index} />)}
        {loading ? Array(20).fill(0).map((_, index) => <Card key={index} loading />) : null}
      </div>

      <div className="mt-8 w-full flex justify-center">
        <div
          className="bg-[#22212c] hover:bg-[#2d2c3e] cursor-pointer w-full max-w-96 text-center py-2 rounded-lg text-slate-200"
          onClick={() => setPage(page + 1)}
        >Load More</div>
      </div>

    </div>
  )
}

export default Popular