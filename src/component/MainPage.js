import React, { useState, useEffect } from "react";
import RandomFoods from "../component/RandomFoods";
const MainPage = () => {
  let foodarr_test = [];

  const [testfoods, setTest] = useState([]);
  const [testfoodinfo, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/random/feeds")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        const foodinfo = data.data.businesses.map((d) => {
          return {
            title: d.name,
            id: d.id,
            img: d.image_url,
          };
        });
        console.log(foodinfo);
        setInfo(foodinfo);
      });
  }, []);

  const fetchHandler = () => {
    let rand = Math.floor(Math.random() * testfoodinfo.length);

    let num = testfoodinfo[rand];
    foodarr_test.push(num);
    testfoodinfo.splice(rand, 1);
    console.log(testfoodinfo.length);
    setInfo(testfoodinfo);
    setTest((prevState) => [prevState, ...foodarr_test]);
  };

  return (
    <div className='main-page'>
      <h1>Google Food</h1>
      <button onClick={fetchHandler}>Search</button>
      {testfoods.length > 0 ? <RandomFoods foods={testfoods} /> : <div></div>}
    </div>
  );
};

export default MainPage;
