import React from "react";
import RandomFood from "./RandomFood";

const RandomFoods = ({ foods,lat,lng }) => {
  
  return (
    <ul>
     
       <RandomFood key={foods[0].id} 
                  title={foods[0].title} 
                  image={foods[0].image} 
                  category={foods[0].category} 
                  area={foods[0].area}
                  lat={lat}
                  lng={lng}
                  />
    </ul>
  );
};

export default RandomFoods;
