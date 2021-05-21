import React,{useState} from "react";
import RestaurantModal from "../UI/RestaurantModal";
import axios from 'axios';
import Aux from '../hoc/hoc';
const RandomFood = ({ title,image,lat,lng }) => {
 
  
  const [details,setDetail] = useState([]);

  const detailHandler = () => {
      
      const URL = "http://localhost:5000/random/detail";
      const data = {
        'title':title,
        'lat':lat,
        'lng':lng
      }
      fetch(URL,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
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
      <img alt="" src={image}/>
      {details.length > 0 && 
      <RestaurantModal 
        lat={lat}
        lng={lng}
        details={details}
        onCancle={cancleHandler}
      />} 
    </Aux>
  );
};

export default RandomFood;
