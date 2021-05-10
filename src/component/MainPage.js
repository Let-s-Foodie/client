import React, { useState, useEffect } from "react";
import RandomFoods from "../component/RandomFoods";
const MainPage = () => {
  let foodArr = [];

  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/random/feeds")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        const foodList = data.data.businesses.map((d) => {
          return {
            title: d.name,
            id: d.id,
            image: d.image_url,
          };
        });
        setFoodInfo(foodList);
      });
  }, []);

  const fetchHandler = () => {
    let rand = Math.floor(Math.random() * foodInfo.length);

    let num = foodInfo[rand];
    foodArr.push(num);
    foodInfo.splice(rand, 1);
    setFoodInfo(foodInfo);
    setFoods((prevState) => [prevState, ...foodArr]);
  };

  return (
    <div className='main-page'>
      <h1>Google Food</h1>
      <button onClick={fetchHandler}>Search</button>
      {foods.length > 0 ? <RandomFoods foods={foods} /> : <div>GOOD LUCK</div>}
    </div>
  );
};

export default MainPage;
