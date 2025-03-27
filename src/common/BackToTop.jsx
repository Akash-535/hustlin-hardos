"use client";
import React, { useEffect, useState } from "react";
const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const windowScroll = () => {
    setScrollToTop(window.scrollY > 180);
  };
  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
  });
  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-[10px] bottom-[10px] z-30 cursor-pointer"
        >
          <img
            className="size-12 animate-bounce min-[1920.98px]:size-16 max-md:size-10"
            src="./assets/images/back-to-top.webp"
            alt="back to top"
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
