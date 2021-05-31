import React,{useState} from "react";
import RestaurantModal from "../UI/RestaurantModal";
import HashTagModal from "../UI/HashTagModal";
import axios from 'axios';
import Aux from '../hoc/hoc';
const RandomFood = ({ title,image,lat,lng,randomHandler,link,seller,category }) => {
 
  
  const [details,setDetail] = useState([]);
  const [hashtagDetails, setHashtag] = useState([]);

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
  
  //feature-1.2.2
  const displayDetail = () => {
    const businessesDetail = {
      name: title,
      image_url: image,
      link: link
    }
    console.log(businessesDetail)
    setDetail(businessesDetail)
  
  }
  
  const hashtagHandler = (hash)=> {
    console.log(hash)
    const URL = "http://localhost:5000/random/detail";
    const data = {
      'title':hash,
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
    
        console.log(resData)
        setHashtag(resData.data.businesses);
      
    })
  }
  const cancleHashtag = () => {
    setHashtag([]);
  }
 
  return (
    <Aux>
     
      {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
          </p>
          
        </div>
        <div className="px-6 py-2">
        <button 
          onClick={detailHandler}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Detail
          </button>
          <span className="px-4"></span>
          <button 
          onClick={randomHandler}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Skip
          </button>
        </div>
        <div className="px-6 py-4">
  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{title}</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>

      <img alt="" src={image}/>
      {details.length > 0 && 
      <RestaurantModal 
        lat={lat}
        lng={lng}
        details={details}
        onCancle={cancleHandler}
      />}  */}
{/* feature-1.2.2 use hardcorded instead of yelp json file*/}

<div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src={image}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
       
          
        </div>
        <div className="px-6 py-2">
        <button 
          onClick={displayDetail}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Detail
          </button>
          <span className="px-4"></span>
          <button 
          onClick={randomHandler}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Skip
          </button>
        </div>
        <div className="px-6 py-4">
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer mr-2"  
          onClick={() => hashtagHandler(title)}>#{title}</span>
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer mr-2"
          onClick={() => hashtagHandler(seller.name)}>#{seller.name}</span>
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker text-blue-600 cursor-pointer"
          onClick={() => hashtagHandler(category)}>#{category}</span>
        </div>
      </div>

      {details.name  && 
      <RestaurantModal 
        lat={lat}
        lng={lng}
        details={details}
        onCancle={cancleHandler}
      />}

      {hashtagDetails.length > 0 && 
      <HashTagModal
        lat={lat}
        lng={lng}
        details={hashtagDetails}
        onCancle={cancleHashtag}
      />}

    </Aux>
  );
};

export default RandomFood;
