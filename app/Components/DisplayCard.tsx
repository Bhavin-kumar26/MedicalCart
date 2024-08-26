import Image from "next/image";
import React from "react";

const DisplayCard = () => {
  return (
    <div className="border-2 rounded-tl-[2rem] rounded-br-[2rem] border-gray-200 rounded-lg shadow-md  bg-white">
      <Image
        src="/image.png"
        alt="Product Image"
        width={500}
        height={500}
        className="w-full h-40 object-contain rounded-t-lg p-4"
      />
      <div className="mt-4 bg-[#d0edee] p-4 rounded-br-[2rem]">
        <h3 className=" bg-[#afe0e2] w-fit px-2 rounded-sm font-semibold text-md my-2 text-[#365758]">
          Canify
        </h3>
        <div className=" flex gap-4 mb-2">
          <p className="text-sm px-4 py-1 rounded-md text-gray-600 mt-2 bg-[#fcfcfa] w-fit">
            THC: 18%
          </p>
          <p className="text-sm text-white mt-2 px-4 py-1 rounded-md bg-[#62c3c6] w-fit">
            CBD &#60; 1%
          </p>
        </div>
        <h2 className="text-lg font-bold text-[#116a6c]">
          Cannabis Flos 18/1 PT Mango
        </h2>
        <div className=" flex justify-between items-center">
        <p className="text-sm text-gray-600 mt-1">Kultivar <br />Mango</p>
        <p className="text-sm text-gray-600 mt-1">Genetik <br />  Hybrid</p>
        </div>
        <div className="flex justify-between items-center mt-4 gap-2">
          <span className="text-xl font-semibold text-gray-800 text-[20px]">€11,66<sup>1</sup>  <br />
          <span className=" font-light text-[13px]">pro Gramm</span>
          </span>
          <button className="p-1 bg-[#ecfeaa] rounded-tl-full rounded-br-full px-3 text-sm">
          In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
