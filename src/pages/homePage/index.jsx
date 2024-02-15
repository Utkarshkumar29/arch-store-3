import React from "react";
import { HomeContainer, HomeWrapper, LogoWrapper } from "../../styles/homePage";
import Slider from "../../components/slider";
import DashBoard from "../../views/dashBoard";
import Logo from "../../assets/logo.svg"
import MobileSlider from "../../components/mobileSlider";

const HomePage=()=>{
    return(
        <HomeContainer>
            <HomeWrapper>
                <Slider/>
                <DashBoard/>
                <MobileSlider/>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default HomePage