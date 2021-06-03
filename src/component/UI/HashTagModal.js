import React from 'react';
import ReactDom from 'react-dom';
import classes from "./HashTagModal.module.css";
import Hoc from '../hoc/hoc';

import HashTagDetail from '../DetailPage/HashtagDetail';
const Backdrop = ({onCancel}) => {
    return  <div className={classes.backdrop} onClick={onCancel} />;
}
const ModalOverlay = ({lat,lng,details}) => {
   
    return (

        <div className={classes.modal}>
        <div className={classes.content}>
        
          
        
              {details.map((detail) => (
                 <HashTagDetail key={detail.id} detail ={detail}/>
            
            ))}
          
        </div>
  
    </div>
   
    )
}
const HashTagModal = ({lat,lng,details, onCancel}) => {
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

export default HashTagModal;