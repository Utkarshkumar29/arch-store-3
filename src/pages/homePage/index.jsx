import React from "react";
import { HomeContainer, HomeWrapper } from "../../styles/homePage";
import Slider from "../../components/slider";
import DashBoard from "../../views/dashBoard";
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