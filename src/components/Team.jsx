"use client";
import Description from "@/common/Description";
import Heading from "@/common/Heading";
import SubHeading from "@/common/SubHeading";
import { LATEST_TWEETS_LIST, TEAM_LIST } from "@/utils/helper";
import { SwiperArrowIcon, TwitterBlueIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Team = () => {
  return (
    <div id="team" className="pb-[88px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6">
      <div className="max-w-[1140px] mx-auto w-full flex items-center justify-between pb-[90px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6 max-xl:px-4">
        <Heading>Team</Heading>
        <div className="flex items-center gap-14 max-md:gap-10">
          <div className="prev-arrow cursor-pointer">
            <SwiperArrowIcon />
          </div>
          <div className="next-arrow rotate-180 cursor-pointer">
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
            1024: { slidesPerView: 2 },
          }}
          className="max-w-[1140px] mx-auto overflow-hidden latest-swiper mySwiper border-l-2 border-black"
        >
          {TEAM_LIST.map((obj, i) => (
            <SwiperSlide
              key={i}
              className="bg-[url(/assets/images/team-card-bg.webp)] bg-cover bg-no-repeat bg-center max-w-[570px] w-full mx-auto px-[25px] pt-12 pb-[46px] max-md:py-8 border-black border-r-2 !flex !justify-center !items-center !flex-col min-h-[326px] max-md:min-h-[220px] max-md:max-h-[220px]"
            >
              <Image
                width={88}
                height={88}
                className="max-w-[88px] rounded-full max-md:max-w-[60px]"
                src="/assets/images/toon-img.webp"
                alt="toon img"
              />
              <SubHeading
                className={`py-4 font-black ${
                  i === 0 || i === 2 ? "text-brown-v1" : "text-white-v2"
                }`}
              >
                {obj.title}
              </SubHeading>
              <Description className="max-md:text-sm text-center max-w-[407px] mx-auto">
                {obj.description}
              </Description>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
