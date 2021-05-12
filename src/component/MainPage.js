import React, { useState, useEffect } from "react";
import RandomFoods from "../component/RandomFoods";
import useGeoLocation from "./hooks/useGeoLocation";

const MainPage = () => {
  let foodArr = [];

  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);
  const {
    loaded,
    coordinates: { lat, lng },
  } = useGeoLocation();

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
