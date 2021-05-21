import React from "react";
import RandomFood from "./RandomFood/RandomFood";

const RandomFoods = ({ foods,lat,lng }) => {
  
  return (
    <ul>

        <RandomFood  
                  title = {foods[0].title} 
                  image= {foods[0].image}
                  lat={lat}
                  lng={lng}
          />           
    </ul>
  );
};

export default RandomFoods;
