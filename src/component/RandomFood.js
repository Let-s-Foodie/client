import React,{useState} from "react";
import axios from 'axios';
import Aux from './hoc/hoc';
import DetailPage from './DetailPage/DetailPage';
const RandomFood = ({ title, image,category,area }) => {
  const [details,setDetail] = useState([]);
  const detailHandler = () => {
      
      const URL = "http://localhost:5000/random/detail";
      const data = {
        'title':title,
        'image':image,
        'category':category,
        'area':area
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
  return (
    <Aux>
      <h2>{title}</h2>
      <img 
        src={image} 
        alt={""} 
        onClick={detailHandler}
        />
      {details.map(detail => (
        <DetailPage 
          name={detail.name}
          image={detail.image_url}
          key={detail.id}
        />
      ))}
    </Aux>
  );
};

export default RandomFood;
