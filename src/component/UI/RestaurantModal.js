import React from 'react';
import ReactDom from 'react-dom';
import classes from "./RestaurantModal.module.css";
import Hoc from '../hoc/hoc';
import DetailPage from '../DetailPage/DetailPage';
const Backdrop = ({onCancle}) => {
    return  <div className={classes.backdrop} onClick={onCancle} />;
}
const ModalOverlay = ({lat,lng,details}) => {
    console.log("modal" + details)
    return (

        <div className={classes.modal}>
        <div className={classes.content}>
            {/* feature 1.2.7/yelpJson  */}
            {/* 
            {details.map((detail) => (
                <DetailPage 
                    name={detail.name}
                    image={detail.image_url}
                    key={detail.id}
                    lat={lat}
                    lng={lng}
                />
            ))} */}
           
        
                <DetailPage 
                    name={details.name}
                    image={details.image_url}
                    link={details.link}
                />
          
        </div>
  
    </div>
    )
}
const RestaurantModal = ({lat,lng,details, onCancle}) => {
    return (
        <Hoc>
           
            
            {ReactDom.createPortal(
                <Backdrop onCancle={onCancle}/>,
                 document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(
                <ModalOverlay lat ={lat} lng={lng} details={details}/>,
                document.getElementById('overlay-root')
            )}
        </Hoc>
    );
}

export default RestaurantModal;