import React from "react";
import RandomFood from "./RandomFood";

const RandomFoods = ({ foods,lat,lng }) => {
  
  return (
    <ul>

        <RandomFood  
                  title = {foods[0].title} 
                 
                  lat={lat}
                  lng={lng}
          />           
    </ul>
  );
};

export default RandomFoods;
