import ConnectWallet from "@/common/ConnectWallet";
import Header from "@/common/Header";
import TopBar from "@/common/TopBar";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <TopBar />
      <ConnectWallet />
      <Header />
      <div className="pt-[25px] flex flex-col pb-[67px] max-lg:pt-5 max-sm:pt-3 max-lg:pb-10 max-md:pb-6">
        <h1 className="font-modern-comp text-157 font-normal leading-100 text-center max-xl:text-9xl max-lg:text-80 max-md:text-5xl">
          THE HUSTLIN’ HARDOS.
        </h1>
        <div className="w-full max-w-[1920px] h-[476px] overflow-hidden mx-auto max-xl:h-auto border-y-2 border-black">
          <Image
            width={1920}
            height={476}
            className="max-w-[1920px] w-full mx-auto hover:scale-105 duration-300 ease-linear xl:min-h-[476px] max-h-[476px] object-cover"
            src="/assets/images/hero-img.webp"
            alt="hero img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
