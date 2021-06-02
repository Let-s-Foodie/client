import React from 'react';
import ReactDom from 'react-dom';
import classes from "./HashTagModal.module.css";
import Hoc from '../hoc/hoc';

import HashTagDetail from '../DetailPage/HashtagDetail';
const Backdrop = ({onCancle}) => {
    return  <div className={classes.backdrop} onClick={onCancle} />;
}
const ModalOverlay = ({lat,lng,details}) => {
    console.log("modal" + details)
    return (

        <div className={classes.modal}>
        <div className={classes.content}>
        
          
        
              {details.map((detail) => (
                 <HashTagDetail detail ={detail}/>
            
            ))}
          
        </div>
  
    </div>
   
    )
}
const HashTagModal = ({lat,lng,details, onCancle}) => {
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

export default HashTagModal;