import React from "react";
import DisplayCard from "./DisplayCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Display = () => {
  return (
    <div>
      <div className="  mt-10 w-full px-3  lg:w-[85%] bg-red-00 lg:mr-[1rem] grid grid-cols-1 md:mr-[3rem] md:grid-cols-2 lg:grid-cols-3 gap-3">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
      <div className=" flex justify-end lg:w-[85%] mt-3 items-center gap-2">
      <IoIosArrowRoundBack />
      <p className=" font-bold"> 1  2  3  ...  12</p>
        <IoIosArrowRoundForward/>
      </div>
    </div>
  );
};

export default Display;
