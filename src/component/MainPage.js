import React, { useState, useEffect } from "react";
import RandomFoods from "../component/RandomFoods";
import axios from 'axios';
const MainPage = () => {
  let foodArr = [];

  const [foodLists, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/random/feeds")
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         throw new Error("Failed to fetch");
  //       }
  //       console.log(res)
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       const foodList = data.data.businesses.map((d) => {
  //         return {
  //           title: d.name,
  //           id: d.id,
  //           image: d.image_url,
  //         };
  //       });
  //       setFoodInfo(foodList);
  //     });
  // }, []);


  const fetchHandler = () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    
    axios.get(URL)
      .then(res => { 
     
        return res.data.meals[0]
      })
      .then(data => {
        console.log(data)
        const foodList = {  title:data.strMeal,
                            id: data.idMeal,
                            image: data.strMealThumb,
                            category: data.strCategory,
                            area:data.strArea
                          }
                         
        setFoods([foodList])
      })
      .catch(error => {
        console.log(error);
      });
     
  }

 
  return (
    <div className='main-page'>
      <h1>Google Food</h1>
      <button onClick={fetchHandler}>Search</button>
      {foodLists.length? <RandomFoods foods={foodLists} /> : <div>GOOD LUCK</div>}
      
    </div>
  );
};

export default MainPage;
