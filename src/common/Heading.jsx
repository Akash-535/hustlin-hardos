import React from "react";

const Heading = ({ text, myClass }) => {
  return (
    <h2
      className={`text-80 leading-104 font-normal max-xl:text-6xl max-lg:text-5xl max-md:text-3xl ${myClass}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
