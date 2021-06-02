import React from 'react';
import ReactDom from 'react-dom';
import classes from "./RestaurantModal.module.css";
import Hoc from '../hoc/hoc';
import DetailPage from '../DetailPage/DetailPage';
const Backdrop = ({onCancel}) => {
    return  <div className={classes.backdrop} onClick={onCancel} />;
}
const ModalOverlay = ({lat,lng,details}) => {
    
    return (

        <div className={classes.modal}>
        <div className={classes.content}>
        
                <DetailPage 
                    name={details.name}
                    image={details.image_url}
                    link={details.seller}
                />
          
        </div>
  
    </div>
    )
}
const RestaurantModal = ({lat,lng,details, onCancel}) => {
    return (
        <Hoc>
           
            
            {ReactDom.createPortal(
                <Backdrop onCancel={onCancel}/>,
                 document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(
                <ModalOverlay lat ={lat} lng={lng} details={details}/>,
                document.getElementById('overlay-root')
            )}
        </Hoc>
    );
}

export default RestaurantModal;