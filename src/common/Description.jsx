import React from "react";

const Description = ({ children, className = "" }) => {
  return (
    <p className={`text-base leading-100 font-normal ${className}`}>
      {children}
    </p>
  );
};

export default Description;
