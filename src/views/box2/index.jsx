import React, { useState } from "react";
import { Box2Container, Box2Wrapper, Market } from "../../styles/box2";

export const Box2=()=>{
    const [clicked,setClicked]=useState('')

    return(
        <Box2Container>
            <Box2Wrapper>
                <Market onClick={()=>setClicked('item1')} className={clicked === 'item1' ? 'active' : ''}>Market Analysis</Market>
                <Market onClick={()=>setClicked('item2')} className={clicked === 'item2' ? 'active' : ''}>Performance</Market>
            </Box2Wrapper>
        </Box2Container>
    )
}