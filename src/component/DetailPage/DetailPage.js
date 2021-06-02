import React from 'react';
import Aux from '../hoc/hoc';
import "./DetailPage.css";
const DetailPage = ({name,image,link}) => {
  

    return (
        <Aux>
            <img 
                alt="" 
                src={image}
                className="image"    
            />
            <div>{name}</div>
            <div>homepage:{link.homepage}</div>
            <div>Instagram:{link.instagram}</div>
            <div>Facebook:{link.facebook}</div>
            <div>Youtube:{link.youtube}</div>
            <div>Yelp:{link.yelp}</div>
        </Aux>
    );
}
export default DetailPage;