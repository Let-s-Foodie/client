import React from "react";
import RandomFood from "./RandomFood";

const RandomFoods = (props) => {
  return (
    <ul>
      {props.foods.map((food) => (
        <RandomFood key={food.id} title={food.title} img={food.img} />
      ))}
    </ul>
  );
};

export default RandomFoods;
