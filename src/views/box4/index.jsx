import React from "react";
import { Box4Container, Box4Wrapper, CategoryWrapper, CurentMarket, Image, ImageWrapper, Industry, MarketContainer, MarketDescription, MarketWrapper, MeterWrapper, Note, Note1, Note2, NoteWrapper, PointsWrapper, Rating, TextWrapper, TimePeriod } from "../../styles/box4";
import Graph from "../../assets/Line and bar chart.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Meter from "../../assets/Meter.svg"

const Box4=()=>{
    return(
        <Box4Container>
            <Box4Wrapper>
                <MarketContainer>
                    <MarketWrapper>
                        <MarketDescription>
                            <CurentMarket>Current Market Trend</CurentMarket>
                            <Rating>Track how your rating compares to your industry average.</Rating>
                        </MarketDescription>
                        <TimePeriod>
                            <p>12 months</p>
                            <p>30 days</p>
                            <p>7 days</p>
                        </TimePeriod>
                    </MarketWrapper>
                    <CategoryWrapper>
                        <p>Market</p>
                        <p>Category</p>
                        <p>Products</p>
                        <p>Cross Selling</p>
                        <p>Geograpghy</p>
                    </CategoryWrapper>
                    <div style={{padding:"10px"}}>
                        <Image src={Graph} alt="Error"/>
                    </div>
                    <NoteWrapper>
                        <FontAwesomeIcon icon={faBullhorn}/>
                        <Note>
                            <Note1>Your customer market is increasing! Set up Ad Campaign to reach your customers</Note1>
                            <Note2>We will guide you through entire setup of Campaign</Note2>
                        </Note>
                    </NoteWrapper>
                </MarketContainer>
                <MeterWrapper>
                    <Industry>
                        <p>Industry Opportunities</p>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Industry>
                    <ImageWrapper>
                        <Image src={Meter} alt="Error"/>
                    </ImageWrapper>
                    <TextWrapper>
                        <p>You can achieve </p>
                        <p style={{color:"#10B981",fontWeight:"400",padding:"0px 5px 0px 5px"}}>44%</p>
                        <p> more opportunities in market</p>
                    </TextWrapper>
                    <PointsWrapper>
                        <p>Your Position in Market</p>
                        <p>Total Market Opportunities </p>
                        <p>Achievable Market Opportunities</p>
                    </PointsWrapper>
                </MeterWrapper>
            </Box4Wrapper>
        </Box4Container>
    )
}

export default Box4