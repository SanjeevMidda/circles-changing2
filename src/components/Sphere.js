import React from "react";

const Sphere = ({ condition, color }) => {
  console.log(color);
  let styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: color,
    transform: condition ? "scale(0.5)" : "scale(1)",
  };

  return <div className="sphere" style={styles}></div>;
};

export default Sphere;
