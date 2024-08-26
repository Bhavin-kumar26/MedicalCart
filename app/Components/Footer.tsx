import React from "react";
import { BiSolidLeaf } from "react-icons/bi";

const Footer = () => {
  const data = [
    "Rezept einlosen",
    "Live Bestand",
    "Videosprechstunde",
    "FAQs",
    "Kontakt",
  ];

  return (
    <div className=" flex-col lg:flex-row flex justify-evenly items-start gap-4 flex-wrap bg-[#1a8d91] text-white px-3 lg:px-[10rem] h-auto xl:h-[25vh] rounded-t-[2rem] mt-32 pt-5 ">
      <div className=" xl:pt-[5rem] w-fit">
        <p className=" text-[#8dc6c8] text-sm ">AGB</p>
        <p className=" text-[#8dc6c8] text-sm "> Impressum </p>
        <p className=" text-[#8dc6c8] text-sm "> Datenschutz</p>
      </div>
      <div className=" ">
        <div className=" flex gap-4">
          {data.slice(0, 2).map((i) => (
            <li
              className=" text-sm flex items-center gap-1 font-light hover:font-normal cursor-pointer"
              key={i}
            >
              <BiSolidLeaf /> {i}
            </li>
          ))}
        </div>
        <div className=" flex gap-4">

        {data.slice(2).map((i) => (
          <li
          className=" text-sm flex items-center gap-1 font-light hover:font-normal cursor-pointer"
          key={i}
          >
            <BiSolidLeaf /> {i}
          </li>
        ))}
        </div>
      </div>
      <div>
        <p className=" text-[#8dc6c8] text-sm">Standort</p>
        <p className=" font-bold">
          Bergstraße 49 - 57 69469 <br /> Weinheim (3 Glocken Quartier)
        </p>
      </div>
      <div>
        <p className=" text-[#8dc6c8] text-sm">Telefon</p>
        <p className=" font-bold">0223 545 5250</p>
      </div>
      <div>
        <p className=" text-[#8dc6c8] text-sm">Öffnungszeiten</p>
        <p className=" text-[#8dc6c8] text-sm mt-2">Mo-Fr</p>
        <p className=" font-bold">09:00 - 18:00 Uhr</p>
        <p className=" text-[#8dc6c8]">Sa</p>
        <p className=" font-bold">09:00 - 14:00 Uhr</p>
      </div>
    </div>
  );
};

export default Footer;
