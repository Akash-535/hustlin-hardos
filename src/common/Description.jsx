import React from "react";

const Description = ({ text, myClass }) => {
  return (
    <p className={`text-base leading-100 font-normal ${myClass}`}>{text}</p>
  );
};

export default Description;
