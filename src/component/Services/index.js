import React from 'react'
import Icon1 from '../../static/svg-1.svg';
import {ServicesContainer,ServicesH2,ServicesH1,ServicesCard,ServicesWrapper,ServicesIcon,ServicesP} from './ServicesElement';
const Services = ({loaded,local}) => {
  
 
    console.log("Service loaded", local)
    return (
       <ServicesContainer id ="services">
           <ServicesH1>Local Favorites</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                  {loaded === 1 ?  <ServicesIcon src={local.businesses[0].image_url}/> : <ServicesIcon src={Icon1}/>} 
                  {loaded === 1 ? <ServicesH2>{local.businesses[0].alias}</ServicesH2> : ""}
                  {loaded === 1 ? <ServicesP>{local.businesses[0].location.display_address[0] + 
                    local.businesses[0].location.display_address[1] }</ServicesP> : ""}
               </ServicesCard>
                <ServicesCard>
                   {loaded === 1?  <ServicesIcon src={local.businesses[1].image_url}/> : <ServicesIcon src={Icon1}/>} 
                   {loaded === 1 ? <ServicesH2>{local.businesses[1].alias}</ServicesH2> : ""}
                   {loaded === 1 ? <ServicesP>{local.businesses[1].location.display_address[0] + 
                     local.businesses[1].location.display_address[1] }</ServicesP> : ""}
                </ServicesCard>
               <ServicesCard>
                    {loaded === 1?  <ServicesIcon src={local.businesses[2].image_url}/> : <ServicesIcon src={Icon1}/>} 
                    {loaded === 1 ? <ServicesH2>{local.businesses[2].alias}</ServicesH2> : ""}
                   {loaded === 1 ? <ServicesP>{local.businesses[2].location.display_address[0] + 
                     local.businesses[2].location.display_address[1] }</ServicesP> : ""}
               </ServicesCard>
           
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
