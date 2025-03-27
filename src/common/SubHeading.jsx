import React from "react";

const SubHeading = ({ className = "", children }) => {
  return (
    <h3
      className={`text-4xl leading-111 max-lg:text-3xl max-md:text-2xl ${className}`}
    >
      {children}
    </h3>
  );
};

export default SubHeading;
