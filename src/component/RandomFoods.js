import React from "react";
import RandomFood from "./RandomFood";

const RandomFoods = ({ foods }) => {
  
  return (
    <ul>
     
       <RandomFood key={foods[0].id} title={foods[0].title} image={foods[0].image} category={foods[0].category} area={foods[0].area}/>
    </ul>
  );
};

export default RandomFoods;
