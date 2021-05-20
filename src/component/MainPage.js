import React, { useState, useEffect } from "react";
import RandomFoods from "../component/RandomFoods";
import axios from 'axios';
import useGeoLocation from "./hooks/useGeoLocation";
import * as dataSet from "./Data/categories.json";


const MainPage = () => {
 
  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);

  const [foodCategory,setCategory] = useState([]);
  useEffect(() => {
     
      
      let dataset = dataSet.default.map(function(data){
       
        if(data.parents[0] === "restaurants" || data.parents[0] === "food"){
            return data;
        }
        
      })
      let data = dataset.filter(function(el){
        return el != null;
      })
      console.log(data)
      setCategory(data);
      
  },[]);


  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

  const categoriesHandler = () => {
    let foodList =[];
    let i = foodCategory.length,
        j = 0;
       j = Math.floor(Math.random() * (i+1));
       foodList.push(foodCategory[j]);
       foodCategory.splice(j,1);
       setCategory(foodCategory);
       const foodLists = {
         title: foodList[0].title,
         
        
         
       }
       setFoods([foodLists])
      
       
   
  }
 
 
  return (
    <div className='main-page'>
      <h1>Google Food</h1>
  
      {loaded && <button onClick={categoriesHandler}>Search</button>}
      
      {foods.length > 0 ? <RandomFoods foods={foods} lat={lat} lng={lng} /> : <div>GOOD LUCK</div>}
    
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
  );
};

export default MainPage;
