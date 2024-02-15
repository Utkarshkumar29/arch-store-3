import React, { useState } from "react";
import Logo from "../../assets/logo.svg"
import { Close, IconWrapper, LogoWrapper } from "../../styles/mobileSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faClose, faGear, faHouse, faLayerGroup, faLifeRing, faSquareCheck, faSquarePollVertical, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Box1, Box2, Image } from "../../styles/slider";
import Photo from "../../assets/Avatar.svg"

const MobileSlider=()=>{
    const [home,setHome]=useState(false)

    return(
        <>
            <LogoWrapper>
                <Image src={Logo} alt="Error" onClick={()=>{setHome(!home)}}/>
            </LogoWrapper>
            {home && (
                <IconWrapper>
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
                    <Close>
                        <FontAwesomeIcon icon={faClose} onClick={()=>setHome(!home)} style={{color:"white"}}/>
                    </Close>
                </IconWrapper>
            )}
        </>
    )
}

export default MobileSlider