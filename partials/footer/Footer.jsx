import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#242735b3] border-t-[1px] border-[#39374b] text-[.9rem] text-[#bac1cd] w-full h-16 flex items-center justify-between px-[12rem]">

      <div>movies.</div>
      <div className="flex items-center gap-2">Made with <FaHeart /> mm</div>

    </div>
  )
}

export default Footer