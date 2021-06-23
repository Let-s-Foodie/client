import React from 'react';
import {Link} from 'react-router-dom';
import "./Jumbotron.css";
const Jumbotron = () => {
    return (
        <div className='jumbo-page'>
        <div className='main-title'>
          <h1>what am i <br/>gonna eat today?</h1>
          <h2>we got you</h2>
        </div>
  
        
        <div className="center">
          <div className="btn-2" >
            <Link to="/mainpage"><span>get started</span></Link>
          </div>
        </div>
       
       
      
       
      </div>
    )
}


export default Jumbotron;