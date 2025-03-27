"use client";
import Description from "@/common/Description";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const BreakingNews = () => {
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
  return (
    <div
      ref={sectionRef}
      className="pb-[89px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6"
    >
      <h3 className="max-w-[1140px] mx-auto text-7xl leading-140 text-shadow pb-16 max-lg:pb-10 max-md:pb-6 max-xl:text-6xl max-lg:text-5xl max-md:text-3xl max-xl:px-4">
        “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT
        project of 2022"
      </h3>
      <div className="border-y-2 border-black flex items-center justify-center">
        <div className="max-w-[1140px] mx-auto border-l-2 max-lg:border-x-2 border-black flex items-center justify-center max-lg:flex-col max-md:mx-4">
          <div className="pl-[43px] pr-[52px] w-full max-lg:px-10 max-lg:py-5 max-md:px-6">
            <Description className="pb-4 max-w-[475px] max-lg:pb-2">
              March 1, 2022 by Editor Hardo
            </Description>
            <Description className="pb-4 max-w-[475px] text-lg leading-150 max-lg:pb-2 max-lg:text-base max-md:text-sm max-lg:max-w-[389px]">
              Hustlin' Hardos is a collection of 9,999 NFT characters on the
              Ethereum Blockchain, inspired by the business/finance world,
              hustler culture and web3 aesthetics. Each Hustlin' Hardo is a
              completely original and unique combination of hundreds of
              potential attributes such as luxury watches, clothing, or
              accessories - all with provable degrees of rarity. The collection
              features truly unique and powerful artwork, while offering its
              holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your
              gateway to The Boardroom, one of the most rewarding and engaging
              online communities
            </Description>
            <Link href="#" className="underline decoration-black">
              Read More...
            </Link>
          </div>
          <div className="lg:border-x-2 border-black max-w-[570px] w-full h-[572px] max-xl:h-auto overflow-hidden max-lg:max-w-[470px] relative">
            <span
              ref={overlayRef}
              className="block w-full h-full bg-white-v1 absolute top-0 right-0"
            ></span>
            <Image
              width={570}
              height={572}
              className="max-w-[570px] w-full object-cover xl:min-h-[572px] max-lg:max-w-[470px]"
              src="/assets/images/toon-img.webp"
              alt="toon img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
