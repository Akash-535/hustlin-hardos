"use client";
import Description from "@/common/Description";
import Heading from "@/common/Heading";
import { MINTING_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Minting = () => {
  const [count, setCount] = useState(100);
  const [timeRemaining, setTimeRemaining] = useState(
    40 * 24 * 3600 + 15 * 3600 + 12 * 60 + 10
  );

  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      width: "0%",
      duration: 2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% bottom",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);
  return (
    <div
      id="minting"
      ref={sectionRef}
      className="pb-[88px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6"
    >
      <Heading
        myClass="pb-[89px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6 max-xl:px-4 max-w-[1140px] mx-auto"
        text=" Minting"
      />
      <div className="border-y-2 border-black flex items-center justify-center max-xl:px-4 max-md:px-0">
        <div className="max-w-[1140px] mx-auto border-l-2 max-lg:border-x-2 border-black flex items-center justify-center max-lg:flex-col max-md:mx-4">
          <div className="pl-[25px] w-full max-lg:px-10 max-lg:py-5 max-md:px-6 pr-[107px] py-11 max-xl:px-5 max-xl:py-7">
            <Description
              myClass="pb-[15px] max-w-[438px] leading-150 max-xl:pb-3 max-lg:pb-2 max-md:text-sm max-lg:max-w-[389px]"
              text="     Most of the Hustlin’ Hardos first experienced NFTs via other
              successful projects like NBA TopShot, where revealing your newly
              minted item invoked the same emotions as opening up that first
              pack of baseball cards. NFTs have allowed us to enjoy those
              feelings once again while also empowering communities through
              shared ownership. The space has seen incredible growth over the
              past year, and it is our belief that we are in the very early
              innings of the paradigm shift that will be powered by web3."
            />
            <div className="border-2 border-black flex max-w-[238px] justify-between items-center overflow-hidden">
              <button
                onClick={() => setCount(Math.max(count - 1, 0))}
                className="cursor-pointer text-4xl leading-100 font-semibold min-w-[60px] max-lg:text-xl max-md:text-lg border-r-2 border-black hover:bg-black hover:text-white duration-300 ease-linear min-h-[53px] max-h-[53px] max-lg:min-h-9"
              >
                -
              </button>
              <p className="text-4xl leading-100 font-semibold min-w-[109px] max-w-[109px] max-lg:text-xl max-md:text-lg min-h-[53px] flex justify-center items-center max-lg:min-h-9">
                {count}
              </p>
              <button
                onClick={() => setCount(count + 1)}
                className="cursor-pointer text-4xl leading-100 font-semibold min-w-[60px] max-lg:text-xl max-md:text-lg border-l-2 border-black hover:bg-black hover:text-white duration-300 ease-linear min-h-[53px] max-h-[53px] max-lg:min-h-9"
              >
                +
              </button>
            </div>
            <button className="py-3 px-4 leading-100 text-sm font-semibold uppercase border-2 border-black bg-yellow-v1 hover:border-yellow-v1 hover:text-yellow-v1 hover:bg-black cursor-pointer duration-300 ease-linear mb-9 mt-[35px] max-xl:my-6 max-lg:my-3">
              Mint NOW
            </button>
            <div>
              <p className="text-green-v1 text-lg leading-100 max-lg:text-base max-md:text-sm">
                Time Left
              </p>
              <p className="text-4xl text-red-v1 leading-100 font-semibold pt-1 max-lg:text-2xl max-md:text-xl">
                {formatTime(timeRemaining)}
              </p>
            </div>
          </div>
          <div className="lg:border-x-2 border-black max-w-[570px] w-full h-[567px] max-xl:h-[509px] overflow-hidden max-lg:max-w-[470px] max-lg:h-auto relative">
            <span
              ref={overlayRef}
              className="block w-full h-full bg-white-v1 absolute top-0 right-0"
            ></span>
            <Image
              width={570}
              height={567}
              className="max-w-[570px] w-full object-cover xl:min-h-[567px] lg:min-h-[509px] max-lg:max-w-[470px]"
              src="/assets/images/toon-img.webp"
              alt="toon img"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-b-2 border-black py-5 w-full">
        <div className="flex items-center justify-between max-w-[832px] mx-auto w-full px-5 max-md:flex-wrap max-md:justify-center max-md:gap-5">
          {MINTING_LIST.map((obj, i) => (
            <div
              key={i}
              className="max-md:w-1/3 max-md:flex flex-col justify-center items-center"
            >
              <p className="text-2xl leading-111 pb-3 max-lg:text-xl max-md:text-lg max-lg:pb-1">
                {obj}
              </p>
              <p className="text-4xl leading-111 font-semibold max-lg:text-2xl max-md:text-xl max-md:pr-14">
                42
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minting;
