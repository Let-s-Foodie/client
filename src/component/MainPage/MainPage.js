import React, { useState, useEffect } from "react";

import RandomFoods from "../RandomFoods";

import axios from 'axios';
import useGeoLocation from "../hooks/useGeoLocation";
import * as dataSet from "../Data/categories.json";
import Aux from '../hoc/hoc';
import "./MainPage.css";
const MainPage = () => {
  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);

  const [foodCategory, setCategory] = useState([]);
  useEffect(() => {

    let dataset = dataSet.default.map((data) => {
      if (data.parents[0] === "restaurants" || data.parents[0] === "food") {
        return data;
      }
    });
    let data = dataset.filter((el) => {
      return el != null;
    });
    console.log(data);
    setCategory(data);
  }, []);

   


  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

  const categoriesHandler = () => {
    let foodList = [];
    let i = foodCategory.length;
    let j = Math.floor(Math.random() * (i + 1));
    foodList.push(foodCategory[j]);
    foodCategory.splice(j, 1);
    setCategory(foodCategory);
    const foodLists = {
      title: foodList[0].title,
    };
    setFoods([foodLists]);
  };

  
 
 
  return (
   
     <Aux>
      <section className="main-page">
      {!loaded && <div>Loading...</div>}
     {loaded && foods.length == 0 && <button 
                  onClick={categoriesHandler}>Get Started</button> 
      }
      {foods.length > 0 ? 
        <RandomFoods 
          foods={foods} 
          lat={lat} 
          lng={lng} 
          randomHandler={categoriesHandler} /> : <div></div>}
          



   

      </section>
      
     </Aux>
     
     
  
  );
};

export default MainPage;
