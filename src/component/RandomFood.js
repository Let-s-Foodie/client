import React from "react";

const RandomFood = ({ title, image }) => {
  return (
    <p>
      <h2>{title}</h2>
      <img src={image} alt={""} />
    </p>
  );
};

export default RandomFood;
