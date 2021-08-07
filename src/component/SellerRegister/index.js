import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import img from '../../static/svg-1.svg';
import BusinessClaim from './BusinessClaim';
import SnsClaim from './SnsClaim';
import {Container, Wrapper, Row, Column1, Column2, ImgWrap,Img} from './RegisterElement';
const SellerRegister = ({lightBg, imgStart}) => {
    //useEffect localstorage 

    const [registerSteps, setSteps] = useState({'step':1, // it should be updated 
    'business':'',
    'country':'',
    'street':'',
    'city':'',
    'state':'',
    'zipcode':'',
    'instagram': '',
    'facebook': '',
    'yelp':'',
    'homepage':'',
    'youtube':''
    });
  
    const {step} = registerSteps;
    const {business, country,street,city,state,instagram,zipcode, facebook, yelp, homepage, youtube} = registerSteps;
    const values = { business, country,street,city,state,instagram,zipcode, facebook, yelp, homepage, youtube};
    
    let match = useRouteMatch();
    const nextStep = () => {
        const {step} = registerSteps;
        setSteps(previousInputs => ({...previousInputs,
            step: step + 1
        }))
    }
    const prevStep = () => {
        const { step } = registerSteps;
        setSteps(previousInputs => ({...previousInputs,
            step: step - 1
        })
        )
    }
   
    const handleChange = (input,value) => {
        
        setSteps(previousInputs => ({...previousInputs, [input]: value }));
      };
    const RegisterForm = () => {
       
        switch (step) {
            case 1:
                return (
                            <BusinessClaim
                            nextStep={nextStep}
                            values={values}
                            handleChange={handleChange}
                            />
                )
                
            case 2: 
                return (<SnsClaim
                            nextStep={nextStep}
                            prevStep={prevStep}
                            values={values}
                            handleChange={handleChange}/>) 
            default:
                break;
        }    
    }
    console.log(registerSteps)
    return (
      
        <>
       
            <Container lightBg={lightBg}>
                <Wrapper>
                    <Row imgStart={imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <RegisterForm/>
                        </Column2>
                       

                       
                       
                    </Row>
                </Wrapper>
            </Container>
             
        
        </>
       
    )
}

export default SellerRegister;
