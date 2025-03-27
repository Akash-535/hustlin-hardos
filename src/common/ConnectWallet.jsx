import { SOCIAL_ICON_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ConnectWallet = () => {
  return (
    <div className="w-full flex items-center justify-end max-w-[1920px] mx-auto">
      <div className="flex items-center justify-between w-full 2xl:mr-[420px] max-xl:mr-0  max-2xl:mr-[177px] max-w-[658px] px-4 pt-2 pb-4">
        <Link
          href="#"
          className="text-2xl leading-100 font-normal font-modern-comp"
        >
          Hustlin' Hardos
        </Link>
        <div className="flex items-center gap-[18px] max-md:gap-3">
          {SOCIAL_ICON_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              target="_blank"
              className="hover:scale-110 duration-300 ease-linear"
            >
              {obj.icon}
            </Link>
          ))}
        </div>
        <button className="max-md:hidden py-3 px-4 leading-100 text-sm font-semibold uppercase border-2 border-black bg-yellow-v1 hover:border-yellow-v1 hover:text-yellow-v1 hover:bg-black cursor-pointer duration-300 ease-linear">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
