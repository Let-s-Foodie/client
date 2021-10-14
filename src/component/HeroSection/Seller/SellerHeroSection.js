import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP2,HeroBtnWrapper,ArrowForward,ArrowRight} from '../HeroElement';
import Video from '../../../videos/video2.mp4';
import { ButtonR } from '../../ButtonElement';
const SellerHeroSection = () => {
    const [hover,setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Grow your business with Randi</HeroH1>
                <HeroP2>
                    People on Randi are looking to spend their money with the right local business. Make sure they choose you.
                </HeroP2>
                <HeroBtnWrapper>
                    <ButtonR to='/seller/register/1'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Manage my free listing {hover ? <ArrowForward/> : <ArrowRight/>}
                    </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default SellerHeroSection;
