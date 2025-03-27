import { HEADER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full border-y-2 border-black flex justify-center items-center">
      <div className="flex">
        {HEADER_LIST.map((obj, i) => (
          <Link
            key={i}
            href={obj.link}
            className={`px-6 border-black uppercase leading-100 text-base py-[11px] max-md:text-sm max-md:px-2 max-md:py-1 max-sm:text-xs hover:bg-black hover:text-white duration-300 ease-linear ${
              i === 0 ? "border-x-2" : "border-r-2"
            }`}
          >
            {obj.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
