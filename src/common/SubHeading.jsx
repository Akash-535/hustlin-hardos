import React from "react";

const SubHeading = ({ myClass, text }) => {
  return (
    <h3
      className={`text-4xl leading-111 max-lg:text-3xl max-md:text-2xl ${myClass}`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
