import React from 'react'
import Icon1 from '../../static/svg-1.svg';
import {ServicesContainer,ServicesH2,ServicesH1,ServicesCard,ServicesWrapper,ServicesIcon,ServicesP} from './ServicesElement';
const Services = () => {
    return (
       <ServicesContainer id ="services">
           <ServicesH1>Local Favorites</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Reduce expenses</ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
               </ServicesCard>
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
