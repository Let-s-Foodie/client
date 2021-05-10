import React from "react";
import RandomFood from "./RandomFood";

const RandomFoods = ({ foods }) => {
  return (
    <ul>
      {foods.map((food) => (
        <RandomFood key={food.id} title={food.title} image={food.image} />
      ))}
    </ul>
  );
};

export default RandomFoods;
