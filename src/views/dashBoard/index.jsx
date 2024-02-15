import React from "react";
import { DashBoardContainer, DashBoardWrapper } from "../../styles/dashBoard";
import Box1 from "../box1";
import { Box2 } from "../box2";
import Box3 from "../box3";
import Box4 from "../box4";
import Box5 from "../box5";

const DashBoard=()=>{
    return(
        <DashBoardContainer>
            <DashBoardWrapper>
                <Box1/>
                <Box2/>
                <Box3/>
                <Box4/>
                <Box5/>
            </DashBoardWrapper>
        </DashBoardContainer>
    )
}

export default DashBoard