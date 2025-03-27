"use client";
import Description from "@/common/Description";
import Heading from "@/common/Heading";
import SubHeading from "@/common/SubHeading";
import { LATEST_TWEETS_LIST } from "@/utils/helper";
import { SwiperArrowIcon, TwitterBlueIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LatestTweets = () => {
  return (
    <div className="pb-[88px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6">
      <div className="max-w-[1140px] mx-auto w-full flex items-center justify-between pb-[90px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6 max-xl:px-4">
        <Heading myClass="uppercase" text="Latest Tweets" />
        <div className="flex items-center gap-14 max-md:gap-10">
          <div className="prev-arrow cursor-pointer hover:-translate-x-1.5 duration-300 ease-linear">
            <SwiperArrowIcon />
          </div>
          <div className="next-arrow rotate-180 cursor-pointer hover:translate-x-1.5 duration-300 ease-linear">
            <SwiperArrowIcon />
          </div>
        </div>
      </div>
      <div className="border-y-2 border-black px-4">
        <Swiper
          slidesPerView={3}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-[1140px] mx-auto overflow-hidden latest-swiper mySwiper border-l-2 border-black"
        >
          {LATEST_TWEETS_LIST.map((obj, i) => (
            <SwiperSlide
              key={i}
              className="max-w-[380px] w-full mx-auto px-[25px] pt-12 pb-[46px] max-md:py-8 border-black border-r-2"
            >
              <SubHeading myClass="font-semibold" text={obj.heading} />
              <div className="flex items-center gap-2.5 pt-[13px]">
                <TwitterBlueIcon />
                <p className="text-sm leading-100">{obj.date}</p>
              </div>
              <Description
                myClass="pt-3.5 pb-[15px] max-md:text-sm"
                text={obj.description}
              />
              <Link
                href="#"
                className="underline decoration-black hover:text-blue-v1 duration-300 ease-linear hover:decoration-blue-v1"
              >
                Read More...
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestTweets;
