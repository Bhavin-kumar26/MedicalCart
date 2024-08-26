"use client";
import React, { ChangeEvent, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const SideBar = () => {
  const data = ["ADREXpharma", "Aurora", "Avaay", "Bedrocan", "Cannamedical"];
  const [value, setValue] = useState<number>(50); // Initial value

  // Function to handle value changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="hidden md:ml-[5rem] md:block lg:ml-[5rem] pt-10 w-[25%] text-center">
      <h3 className=" text-xl font-medium bg-slate-300 ">Filter</h3>
      <div className=" flex flex-col mt-5">
        <h4 className=" font-bold">Preis</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className=" w-full "
        />
        {/* <DoubleRangeSlider min={0} max={100} step={1} /> */}
        
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          Price: {value}
        </div>
      </div>
      <div>
        <h3 className=" text-lg font-medium mt-5 ">Hersteller</h3>
        <div>
          {data.map((i) => (
            <div className=" flex gap-2 mt-2">
              <input type="checkbox" name="" id="" />
              {i}
            </div>
          ))}
        </div>
        <button className=" border-2 p-1 rounded-tl-full w-full rounded-br-full border-yellow-300 mt-2">
          mehr anzeigen
        </button>
      </div>
      <div className=" flex flex-col mt-5">
        <h4 className=" font-bold">THC Gehalt</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className=" w-full"
        />
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          Price: {value}
        </div>
      </div>
      <div className=" flex flex-col mt-5">
        <h4 className=" font-bold">CBD Gehalt</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className=" w-full"
        />
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          Price: {value}
        </div>
      </div>
      <div className=" flex flex-col mt-5">
        <h4 className=" font-bold">CBD Gehalt</h4>
        <div>
          <ul className=" flex gap-3 mt-2">
            <li className=" px-2 p-1 rounded-md hover:bg-[#62c3c6] hover:text-white cursor-pointer bg-[#ceebea]">
              Indica
            </li>
            <li className=" px-2 p-1 rounded-md hover:bg-[#62c3c6] hover:text-white cursor-pointer bg-[#ceebea]">
              Sativa
            </li>
            <li className=" px-2 p-1 rounded-md hover:bg-[#62c3c6] hover:text-white cursor-pointer bg-[#ceebea]">
              Hybrid
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col mt-5">
        <h4 className=" font-bold">Bestrahltung</h4>
        <div>
          <ul className=" flex gap-3 mt-2">
            <li className=" px-2 p-1 rounded-md hover:bg-slate-500 hover:text-white cursor-pointer bg-slate-300">
              Bestrahlt
            </li>
            <li className=" px-2 p-1 rounded-md hover:bg-slate-500 hover:text-white cursor-pointer bg-slate-300">
              nicht bestrahit
            </li>
          </ul>
        </div>
      </div>
      <div className=" py-6 border-t-2 border-b-2 my-5">
        <p className=" font-bold text-lg flex items-center justify-center gap-4">
          Terpene <MdOutlineKeyboardArrowDown />
        </p>
      </div>
    </div>
  );
};

export default SideBar;
