import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <h1 className="text-6xl text-cyan-500 font-sans font-extrabold">
          Empower Your Team With CoreWave's
        </h1>
        <p className="mt-8 w-[511px] font-sans font-medium text-[#717171]">
          Boost Productivity and Wellness in Your Organization with CoreWave's
          Advanced Tools and Techniques
        </p>
        <div className="flex gap-10 mt-8">
          <button className="btn btn-success">Contact</button>
         <NavLink> <button className="btn btn-success">
            Greet All Product<FaArrowCircleRight></FaArrowCircleRight>
          </button></NavLink>
        </div>
      </div>
      <div>
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
