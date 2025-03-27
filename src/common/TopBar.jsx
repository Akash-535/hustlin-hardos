import { TOP_BAR_LIST } from "@/utils/helper";
import React from "react";
import Marquee from "react-fast-marquee";

const TopBar = () => {
  return (
    <div className="flex items-center bg-black py-3.5 justify-center">
      <Marquee
        pauseOnHover={true}
        direction="right"
        className="flex items-center"
      >
        {TOP_BAR_LIST.map((obj, i) => (
          <div
            key={i}
            className="ml-[62px] cursor-pointer flex items-center gap-1.5 max-lg:ml-12 max-md:ml-8"
          >
            <p className="text-base font-normal leading-100 text-white font-modren-comp">
              {obj.title}
            </p>
            <p
              className={`border rounded-[5px] text-sm leading-100 py-[3px] px-1 ${
                i === 3 || i === 4 || i === 6 || i === 9 || i === 11
                  ? "text-red-v1 border-red-v1"
                  : "text-yellow-v1 border-yellow-v1"
              }`}
            >
              {obj.value}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBar;
