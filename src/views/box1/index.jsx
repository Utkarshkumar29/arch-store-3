import { faBars, faClose, faCloudArrowDown, faLeftRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Bar, Box1Container, Box1Heading, Box1Wrapper, Close, CustomizeContainer, ExportContainer, OptionContainer, SearchWrapper } from "../../styles/box1";

const Box1=()=>{
    const [search,setSearch]=useState(false)

    return(
        <Box1Container>
            <Box1Wrapper>
                <Box1Heading>Dashboard</Box1Heading>
                <OptionContainer>
                    <FontAwesomeIcon icon={faSearch}/> 
                    <CustomizeContainer>
                        <FontAwesomeIcon icon={faLeftRight}/>
                        <p>Customize</p>
                    </CustomizeContainer>
                    <ExportContainer>
                        <FontAwesomeIcon icon={faCloudArrowDown}/>
                        <p>Export</p>
                    </ExportContainer>
                </OptionContainer>
                <Bar onClick={()=>setSearch(!search)}>
                    <FontAwesomeIcon icon={faBars}/>
                </Bar>
                {search && (
                    <SearchWrapper>
                        <CustomizeContainer>
                            <FontAwesomeIcon icon={faLeftRight}/>
                            <p>Customize</p>
                        </CustomizeContainer>
                        <ExportContainer>
                            <FontAwesomeIcon icon={faCloudArrowDown}/>
                            <p>Export</p>
                        </ExportContainer>
                        <Close>
                            <FontAwesomeIcon icon={faClose} onClick={()=>setSearch(!search)}/>
                        </Close>
                    </SearchWrapper>
                    )
                }
            </Box1Wrapper>
        </Box1Container>
    )
}

export default Box1