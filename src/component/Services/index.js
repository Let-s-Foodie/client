import React from 'react'
import Spinner from '../Spinner';
import {ServicesContainer,ServicesH2,ServicesH1,ServicesCard,ServicesWrapper,ServicesIcon,ServicesP} from './ServicesElement';
const Services = ({loaded,local}) => {
  

    return (
       <ServicesContainer id ="service">
           <ServicesH1>Local Favorites</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                  {loaded === 1 ?  <ServicesIcon src={local.businesses[0].image_url}/> : <Spinner viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                   
                    fill="none"
                    strokeWidth="4"/> </Spinner>} 
                  {loaded === 1 ? <ServicesH2>{local.businesses[0].alias}</ServicesH2> : ""}
                  {loaded === 1 ? <ServicesP>{local.businesses[0].location.display_address[0] + 
                    local.businesses[0].location.display_address[1] }</ServicesP> : ""}
               </ServicesCard>
                <ServicesCard>
                   {loaded === 1?  <ServicesIcon src={local.businesses[1].image_url}/> : <Spinner viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    
                    strokeWidth="4"/> </Spinner>} 
                   {loaded === 1 ? <ServicesH2>{local.businesses[1].alias}</ServicesH2> : ""}
                   {loaded === 1 ? <ServicesP>{local.businesses[1].location.display_address[0] + 
                     local.businesses[1].location.display_address[1] }</ServicesP> : ""}
                </ServicesCard>
               <ServicesCard>
                    {loaded === 1?  <ServicesIcon src={local.businesses[2].image_url}/> : <Spinner viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                   
                    strokeWidth="4"/> </Spinner>} 
                    {loaded === 1 ? <ServicesH2>{local.businesses[2].alias}</ServicesH2> : ""}
                   {loaded === 1 ? <ServicesP>{local.businesses[2].location.display_address[0] + 
                     local.businesses[2].location.display_address[1] }</ServicesP> : ""}
               </ServicesCard>
           
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
