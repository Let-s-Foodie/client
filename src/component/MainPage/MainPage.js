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
<<<<<<< HEAD:src/component/MainPage.js
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
=======
     
      
      let dataset = dataSet.default.map(function(data){
       
        if(data.parents[0] === "restaurants" || data.parents[0] === "food"){
            return data;
        }
        
      })
      let data = dataset.filter(function(el){
        return el != null;
      })
   
      setCategory(data);
      
  },[]);

>>>>>>> main:src/component/MainPage/MainPage.js

  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

  const categoriesHandler = () => {
    let foodList = [];
    let i = foodCategory.length,
<<<<<<< HEAD:src/component/MainPage.js
      j = 0;
    j = Math.floor(Math.random() * (i + 1));
    foodList.push(foodCategory[j]);
    foodCategory.splice(j, 1);
    setCategory(foodCategory);
    const foodLists = {
      title: foodList[0].title,
    };
    setFoods([foodLists]);
  };

  return (
    <div className='main-page'>
      <h1>Google Food</h1>

      {loaded && (
        <button className='' onClick={categoriesHandler}>
          Search
        </button>
      )}

      {foods.length > 0 ? (
        <RandomFoods foods={foods} lat={lat} lng={lng} />
      ) : (
        <div>GOOD LUCK</div>
      )}
      <div>
        {loaded ? (
          <>
            <p>Your Latitude: {lat}</p>
            <p>Your Longitude: {lng}</p>
          </>
        ) : (
          "Location data not available yet"
        )}
      </div>
    </div>
=======
        j = 0;
       j = Math.floor(Math.random() * (i+1));
       foodList.push(foodCategory[j]);
       foodCategory.splice(j,1);
       setCategory(foodCategory);
       
       const foodLists = {
         title: foodList[0].title,
          image:""         
       }
       
       setFoods([foodLists])
      
       
   
  }
 
 
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
     
     
    
>>>>>>> main:src/component/MainPage/MainPage.js
  );
};

export default MainPage;
