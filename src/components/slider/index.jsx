import React from "react";
import { Box1, Box2, Image, SliderContainer, SliderWrapper } from "../../styles/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.svg"
import Photo from "../../assets/Avatar.svg"
import { faChartPie, faGear, faHouse, faLayerGroup, faLifeRing, faSquareCheck, faSquarePollVertical, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Slider=()=>{
    return(
        <SliderContainer>
            <SliderWrapper>
                <Box1>
                    <Image src={Logo} alt="Error"/>
                    <FontAwesomeIcon icon={faHouse}/>
                    <FontAwesomeIcon icon={faSquarePollVertical}/>
                    <FontAwesomeIcon icon={faLayerGroup}/>
                    <FontAwesomeIcon icon={faSquareCheck}/>
                    <FontAwesomeIcon icon={faChartPie}/>
                    <FontAwesomeIcon icon={faUserGroup}/>
                </Box1>
                <Box2>
                    <FontAwesomeIcon icon={faLifeRing}/>
                    <FontAwesomeIcon icon={faGear}/>
                    <Image src={Photo} alt="Error"/>
                </Box2>    
            </SliderWrapper>  
        </SliderContainer>
    )
}

export default Slider