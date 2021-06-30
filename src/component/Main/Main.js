import React, { useState, useEffect} from "react";
import RandomFood from "../RandomFood/RandomFood";
import useGeoLocation from "../hooks/useGeoLocation";
import Aux from '../hoc/hoc';
import "./Main.css";
const Main = () => {

  const [foodFeed, setFoodfeed] = useState([]);
  const [foodInfo, setFoodinfo] = useState([]);


  useEffect(() => {
   
    const URL = "http://localhost:5000/dishes";
    fetch(URL)
    .then((res)=>{return res.json()})
    .then((data)=> {

    
    setFoodinfo(data);
   console.log(data)
    })
    return () => {
      setFoodinfo({});
    }
   
  },[foodInfo.length <=1])

  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

 
  const foodListHandler = () => {
    let foodArr = [];
    let i = foodInfo.length;
    
    let j = Math.floor(Math.random() * (i));
    foodArr.push(foodInfo[j]);
    foodInfo.splice(j,1);
    setFoodinfo(foodInfo);
    console.log("seller",)
    const foods = {
      title: foodArr[0].name,
      image: foodArr[0].image,
      category: foodArr[0].category,
      seller: foodArr[0].sellerId,
      id:foodArr[0].id
    };
   
   
    setFoodfeed(foods);
    
  }
 
 
  return (
   
     <Aux>
      <section className="main-page">
      {!loaded && <div>Loading...</div>}
     
   
      
    { loaded && !foodFeed.title && <button onClick={foodListHandler}>Test button</button>   }
     
    

          {foodFeed.title?
            <RandomFood
              title = {foodFeed.title} 
              image={foodFeed.image}
              lat={lat}
              lng={lng}
              randomHandler={foodListHandler}
              seller={foodFeed.seller}
              category={foodFeed.category}
              
              />
            : <div></div>}

      </section>
      
     </Aux>
     
     
  
  );
};

export default Main;
