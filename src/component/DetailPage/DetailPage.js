import React from 'react';
import Aux from '../hoc/hoc';
import "./DetailPage.css";
const DetailPage = ({name,image}) => {
   

    return (
        <Aux>
            <img 
                alt="" 
                src={image}
                className="image"    
            />
            <div>{name}</div>
        </Aux>
    );
}
export default DetailPage;