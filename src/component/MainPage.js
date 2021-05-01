import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  // dummy
  const [foods, setFoods] = useState([]);

  let dummyFood = [
    { id: 0, item: "hamburger" },
    { id: 1, item: "fried chicken" },
    { id: 2, item: "pizza" },
    { id: 3, item: "kimchi" },
    { id: 4, item: "sulbing" },
  ];
  useEffect(() => {
    //  axios
    //    .get(
    //      "https://api.spoonacular.com/food/menuItems/search?apiKey=e44090275918492b9ff9446a5a728c79"
    //    )
    //    .then((res) => {
    //      setFoods(res.data);
    //    })
    //    .catch((err) => {
    //      console.log("SET FOODS ERROR AT MAINPAGE:", err);
    //    });
    //  setFoods(dummyFood);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let firstItem = Math.floor(
      Math.random(dummyFood.length) * dummyFood.length
    );
    let secondItem = Math.floor(
      Math.random(dummyFood.length) * dummyFood.length
    );
    let thirdItem = Math.floor(
      Math.random(dummyFood.length) * dummyFood.length
    );
    setFoods([
      dummyFood[firstItem],
      dummyFood[secondItem],
      dummyFood[thirdItem],
    ]);
  };

  return (
    <div className='main-page'>
      <h1>Google Food</h1>
      <button onClick={handleSubmit}>Search</button>
      {foods.map((eachFood) => {
        return <h3>{eachFood.item}</h3>;
      })}
    </div>
  );
};

export default MainPage;
