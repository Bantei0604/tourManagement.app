import React from "react";

const Subtitle = ({ subtitle }) => {
  return (
    <>
      <h3 className="section__subtitle" style={{ color: "#fff" }}>
        {subtitle}
      </h3>
    </>
  );
};

export default Subtitle;
