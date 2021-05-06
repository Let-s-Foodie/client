import React, { useState, useEffect } from "react";
import axios from "axios";
import RandomFoods from '../component/RandomFoods';
const MainPage = () => {
  // dummy
  let foodarr = [];
  let foodarr_test =[];
  let dummyFood = [
    { id: 0, item: "hamburger" },
    { id: 1, item: "fried chicken" },
    { id: 2, item: "pizza" },
    { id: 3, item: "kimchi" },
    { id: 4, item: "sulbing" },
    { id: 5, item: "milk" },
    { id: 6, item: "chicken" },
    { id: 7, item: "sundae" },
    { id: 8, item: "currypizza" },
    { id: 9, item: "egg" },
  ];
  const [dummyFoods,setDummyFoods] = useState(dummyFood);
  const [foods, setFoods] = useState([]);
  const [testfoods, setTest] = useState([]);
  const [testfoodinfo,setInfo] = useState([]);
  
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
     // fetch('https://api.spoonacular.com/food/products/search?query=chips&apiKey=e44090275918492b9ff9446a5a728c79')
    //   .then(response => {
    //     return response.json();
    //   }).then(data => {
        
    //     const foodsinfo = data.products.map(d => {
    //       return {
    //       title: d.title,
    //       id: d.id,

    //       }

    //     }); 
   fetch('https://api.spoonacular.com/food/products/search?query=chips&apiKey=5318aee9097149ef8e07d2b4fa18cf99')
     .then(response => {
       return response.json();
     }).then(data => {
           console.log(data)
        const foodsinfo = data.products.map(d => {
          return {
          title: d.title,
          id: d.id,

          }

        }); 
         setInfo(foodsinfo)
     })
    
  }, []);
  const fetchHandler = () => {
    // fetch('https://api.spoonacular.com/food/products/search?query=chips&apiKey=e44090275918492b9ff9446a5a728c79')
    //   .then(response => {
    //     return response.json();
    //   }).then(data => {
        
    //     const foodsinfo = data.products.map(d => {
    //       return {
    //       title: d.title,
    //       id: d.id,

    //       }

    //     }); 
        

        for(let i =0; i < 3; i++){
          let rand = Math.floor(Math.random()*testfoodinfo.length);
          console.log(rand)
          let num = testfoodinfo[rand];
          foodarr_test.push(num);
          testfoodinfo.splice(rand,1);
        
        }
        setInfo(testfoodinfo)
        setTest((prevState) => [...prevState,...foodarr_test])
       // console.log("array",testfoods)
      //})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
    for(let i =0; i < 3; i++){
      let rand = Math.floor(Math.random()*dummyFoods.length);
      console.log(rand)
      let num = dummyFoods[rand];
      foodarr.push(num);
      dummyFoods.splice(rand,1);
    
    }
    console.log(dummyFoods)
    console.log("foodarr", foodarr)
    console.log("dummyFOod", dummyFoods.length)
 //   setFoods((prevState) => [...prevState,foodarr])
  setDummyFoods(dummyFoods)
    setFoods((prevState) => [...prevState,...foodarr])
  
  };

  return (
    <div className='main-page'>
      <h1>Google Food</h1>
      <button onClick={fetchHandler}>Search</button>
      {/* {foods.length > 0 ? <RandomFoods foods={foods}/> : <div></div>} */}
      {testfoods.length > 0 ? <RandomFoods foods={testfoods}/> : <div></div>}
    </div>
  );
};

export default MainPage;
