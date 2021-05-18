import React,{useState} from "react";
import axios from 'axios';
import Aux from './hoc/hoc';
import DetailPage from './DetailPage/DetailPage';
const RandomFood = ({ title,lat,lng }) => {
 
  
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
  return (
    <Aux>
      <h2 onClick={detailHandler}>{title}</h2>
     
      {details.length > 0 && details.map((detail) => (
        <DetailPage 
          name={detail.name}
          image={detail.image_url}
          key = {detail.id}
          lat={lat}
          lng={lng}
        />
      ))}
    </Aux>
  );
};

export default RandomFood;
