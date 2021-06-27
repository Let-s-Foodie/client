import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElement';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
const HeroSection = () => {
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
                <HeroH1>Restaurants, and more</HeroH1>
                <HeroP>
                    We got you!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/mainpage'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get started{hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
