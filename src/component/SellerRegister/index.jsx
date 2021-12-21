import React, { useState } from "react";
import { Route } from "react-router-dom";
import img from "../../static/svg-1.svg";
import BusinessClaim from "./BusinessClaim";
import SnsClaim from "./SnsClaim";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./RegisterElement";

const SellerRegister = ({ lightBg, imgStart }) => {
  const [registerSteps, setSteps] = useState({
    step: 1, // it should be updated
    business: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    instagram: "",
    facebook: "",
    yelp: "",
    homepage: "",
    youtube: "",
  });
  // console.log("registerSteps", registerSteps);
  const { step } = registerSteps;

  const {
    business,
    country,
    street,
    city,
    state,
    instagram,
    zipcode,
    facebook,
    yelp,
    homepage,
    youtube,
  } = registerSteps;
  const values = {
    business,
    country,
    street,
    city,
    state,
    instagram,
    zipcode,
    facebook,
    yelp,
    homepage,
    youtube,
  };

  const nextStep = () => {
    const { step } = registerSteps;
    setSteps((previousInputs) => ({ ...previousInputs, step: step + 1 }));
  };

  const prevStep = () => {
    const { step } = registerSteps;
    setSteps((previousInputs) => ({ ...previousInputs, step: step - 1 }));
  };

  const handleChange = (input, value) => {
    setSteps((previousInputs) => ({ ...previousInputs, [input]: value }));
  };
  const RegisterForm = () => {
    switch (step) {
      case 1:
        return (
          <Route path={`/seller/register/${step}`} exact>
            <BusinessClaim
              nextStep={nextStep}
              values={values}
              handleChange={handleChange}
            />
          </Route>
        );

      case 2:
        return (
          <Route path="/seller/register/1" exact>
            <SnsClaim
              nextStep={nextStep}
              prevStep={prevStep}
              values={values}
              handleChange={handleChange}
            />
          </Route>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Container lightBg={lightBg}>
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column1>
            <Column2>
              <RegisterForm />
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default SellerRegister;
