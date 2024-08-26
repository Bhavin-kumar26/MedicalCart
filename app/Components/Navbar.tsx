import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const data = [
    "Rezept einlosen",
    "Live Bestand",
    "Videosprechstunde",
    "FAQs",
    "Kontakt",
  ];

  return (
    <div className=" w-full pt-10 container mx-auto ">
      <div className="   flex justify-center gap-7">
        <div className=" bg-slate-200 flex items-center   rounded-full px-3">
          <input
            className=" w-full h-full bg-slate-200  rounded-lg"
            type="text"
            placeholder=" Suchen"
          />
          <CiSearch />
        </div>
        <ul className=" hidden lg:flex gap-7">
          {data.map((i) => (
            <li
              className=" text-sm flex items-center gap-1 font-light hover:font-normal cursor-pointer"
              key={i}
            >
              <BiSolidLeaf /> {i}
            </li>
          ))}
        </ul>
        <div className=" flex items-center gap-5">
          <BsCart />
          <button className="p-1 bg-yellow-200 rounded-tl-full rounded-br-full px-5">
            Anmelden
          </button>
        </div>
      </div>
      <div className="xl:px-[8rem]   flex items-start container mx-auto justify-between px-1  lg:px-60 pt-14 text-sm">
        <p className=" flex gap-1 items-center text-slate-400">
          Home{" "}
          <span className=" text-2xl">
            <IoIosArrowRoundForward />
          </span>{" "}
          Live Bestand{" "}
          <span className=" text-2xl">
            <IoIosArrowRoundForward />
          </span>
          <span className=" font-semibold text-black"> Cannabis Bluten</span>
        </p>
        <div className="hidden lg:flex flex-col gap-2">
          <p>GKV mit Kostenubernahme?</p>
          <button className=" border-2 p-1 rounded-tl-full rounded-br-full border-slate-400">
            Preisoptionen
          </button>
        </div>
      </div>
      <div className=" pt-10 lg:px-60 xl:px-[8rem] flex items-center justify-between">
        <h2 className=" gap-2 text-3xl font-bold flex items-center">
          <BiSolidLeaf />
          Bluten
        </h2>
        <div className=" hidden md:flex gap-3 ">
          <div className=" bg-slate-200 flex items-center  px-3  rounded-full">
            <input
              className=" outline-none w-full h-full bg-slate-200  rounded-lg"
              type="text"
              placeholder=" Suchen"
            />
            <CiSearch />
          </div>
          <button className=" bg-slate-300 p-1 rounded-md px-4 flex items-center gap-1">
            Sortieren nach <MdOutlineKeyboardArrowDown />
          </button>
          <button className=" bg-slate-300 p-1 rounded-md px-4 flex items-center gap-1">
            Verfugbarkeit <IoToggle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
