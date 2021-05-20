<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import Aux from "./hoc/hoc";
import DetailPage from "./DetailPage/DetailPage";
const RandomFood = ({ title, lat, lng }) => {
  const [details, setDetail] = useState([]);
=======
import React,{useState} from "react";
import RestaurantModal from "../component/UI/RestaurantModal";
import axios from 'axios';
import Aux from './hoc/hoc';
const RandomFood = ({ title,lat,lng }) => {
 
  
  const [details,setDetail] = useState([]);

>>>>>>> baa3028f6379591e8024105e049c493ffacc973d
  const detailHandler = () => {
    const URL = "http://localhost:5000/random/detail";
    const data = {
      title: title,
      lat: lat,
      lng: lng,
    };
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then(
        (res) => {
          return res.json();
        },
<<<<<<< HEAD
        (error) => {
          console.log(error);
        }
      )
      .then((resData) => {
        setDetail(resData.data.businesses);
      });
  };
  return (
    <Aux>
      <h2 onClick={detailHandler}>{title}</h2>

      {details.length > 0 &&
        details.map((detail) => (
          <DetailPage
            name={detail.name}
            image={detail.image_url}
            key={detail.id}
            lat={lat}
            lng={lng}
          />
        ))}
=======
      }) 
      .then((res)=>{
        return res.json();
      },(error) => {
        console.log(error);
      })
      .then(resData => {
        setDetail(resData.data.businesses)
      })
  }
  const cancleHandler = () => {
    setDetail([]);
  }
  
  return (
    <Aux>
      <h2 onClick={detailHandler}>{title}</h2>
     
      {details.length > 0 && 
      <RestaurantModal 
        lat={lat}
        lng={lng}
        details={details}
        onCancle={cancleHandler}
      />} 
>>>>>>> baa3028f6379591e8024105e049c493ffacc973d
    </Aux>
  );
};

export default RandomFood;
