import React from "react";

const Color = ({ color, setColor }) => {
  let styles = {
    backgroundColor: color,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  };

  return (
    <div
      className="color"
      style={styles}
      onClick={() => {
        setColor(color);
      }}
    ></div>
  );
};

export default Color;
