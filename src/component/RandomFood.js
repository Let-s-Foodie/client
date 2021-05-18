import React,{useState} from "react";
import axios from 'axios';
import Aux from './hoc/hoc';
import DetailPage from './DetailPage/DetailPage';
import RestaurantModal from '../component/UI/RestaurantModal';
const RandomFood = ({ title, image,category,area,lat,lng }) => {
  const [details,setDetail] = useState([]);

  const detailHandler = () => {
      
      const URL = "http://localhost:5000/random/detail";
      const data = {
        'title':title,
        'image':image,
        'category':category,
        'area':area,
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
        console.log(resData.data.businesses)
        setDetail(resData.data.businesses)
      })
  }
  const cancleHandler = () => {
    setDetail([]);
  }
  
  return (
    <Aux>
      <h2>{title}</h2>
    
      <img 
        src={image} 
        alt={""} 
        onClick={detailHandler}
        />

      {details.length > 0 &&
      <RestaurantModal 
        lat={lat}
        lng={lng}
        details={details}
        onCancle={cancleHandler}
        />  }
      {/* {details.map(detail => (
        <DetailPage 
          name={detail.name}
          image={detail.image_url}
          key={detail.id}
          lat={lat}
          lng={lng}
        />
      ))} */}
    </Aux>
  );
};

export default RandomFood;
