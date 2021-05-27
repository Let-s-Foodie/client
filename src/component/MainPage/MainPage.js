import React, { useState, useEffect } from "react";
import RandomFood from "../RandomFood/RandomFood";
import useGeoLocation from "../hooks/useGeoLocation";
import * as dataSet from "../Data/categories.json";
import foodList from "../Data/food";
import Aux from '../hoc/hoc';
import "./MainPage.css";
const MainPage = () => {
  /* //feature 1.2.7/yelpJson  
  const [foods, setFoods] = useState([]);*/
  const [foodCategory, setCategory] = useState([]);
  //feature 1.2.2 
  const [foodFeed, setFoodfeed] = useState([]);
  const [foodInfo, setFoodinfo] = useState([]);



  /*feature 1.2.7/yelpJson
  Get data from yelp json file
  
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
  */
  useEffect(() => {
    setFoodinfo(foodList);
  },[])

  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

  /* //feature 1.2.7/yelpJson  
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
*/
  const foodListHandler = () => {
    let foodArr = [];
    let i = foodInfo.length;
    let j = Math.floor(Math.random() * (i));
    foodArr.push(foodInfo[j]);
    foodInfo.splice(j,1);
    setFoodinfo(foodInfo);
    console.log(foodArr)
    const foods = {
      title: foodArr[0].name,
      image: foodArr[0].image,
      link:foodArr[0].link,
      category: foodArr[0].category,
      seller: foodArr[0].seller
    };
    console.log(foods);

    setFoodfeed(foods);
    
  }
 
 
  return (
   
     <Aux>
      <section className="main-page">
      {!loaded && <div>Loading...</div>}
     
     {/* feature 1.2.7/yelpJson  */}
     {/* 
     {loaded && foods.length == 0 && <button 
                  onClick={categoriesHandler}>Get Started</button> 
      } */}
      
    { loaded && !foodFeed.title && <button onClick={foodListHandler}>Test button</button>   }
     
        {/* feature 1.2.7/yelpJson  */}
        {/* 
        {foods.length > 0 ? 
          <RandomFood  
           title = {foods[0].title} 
           image= {foods[0].image}
           lat={lat}
           lng={lng}
           randomHandler={categoriesHandler} />  : <div></div>} */}

          {foodFeed.title?
            <RandomFood
              title = {foodFeed.title} 
              image={foodFeed.image}
              lat={lat}
              lng={lng}
              randomHandler={foodListHandler}
              link={foodFeed.link}
              seller={foodFeed.seller}
              category={foodFeed.category}
              
              />
            : <div></div>}

      </section>
      
     </Aux>
     
     
  
  );
};

export default MainPage;
