import React from "react";
import { Box5Container, Box5Wrapper, PieChartWrapper, Industry, PieChartDetails, PointsWrapper, InfoWrapper, TrendWrapper, AdWrapper, AdTrend, AdTitle, AdInterest, Interest, ImageWrapper, Pie, Wooden, Stone } from "../../styles/box5";
import { faArrowRight, faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PieChart from "../../assets/Pie chart.svg"
import { Image } from "../../styles/box4";
import Graph from "../../assets/Graph.svg"

const Box5=()=>{
    return(
        <Box5Container>
            <Box5Wrapper>
                <TrendWrapper>
                    <Industry>
                        <p>Trending in your Industry</p>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Industry>
                    <PieChartWrapper>
                        <Pie src={PieChart} alt="Error"/>
                        <PieChartDetails>
                            <PointsWrapper>
                                <p>32%</p>
                                <p>Pattern Tiles</p>
                            </PointsWrapper>
                            <PointsWrapper  >
                                <p>49%</p>
                                <Wooden>Wooden Floor</Wooden>
                            </PointsWrapper>
                            <PointsWrapper>
                                <p>27%</p>
                                <Stone>Stone Textured Tiles</Stone>
                            </PointsWrapper>
                        </PieChartDetails>
                    </PieChartWrapper>
                    <InfoWrapper>
                        <FontAwesomeIcon icon={faArrowTrendUp}/>
                        <p>Wooden floor is in trending , set up campaign for wooden tiles to reach these users</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </InfoWrapper>
                </TrendWrapper>
                <AdWrapper>
                    <Industry>
                        <p>Trending in your Industry</p>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Industry>
                    <AdTrend>
                        <AdTitle>
                            <p>Total User</p>
                            <AdInterest>
                                <p>4,862</p>
                                <Interest>
                                    <FontAwesomeIcon icon={faArrowTrendUp} style={{color:"#17B26A"}}/>
                                    <p>9.2%</p>
                                </Interest>
                            </AdInterest>
                        </AdTitle>
                        <AdTitle>
                            <p>Sales</p>
                            <AdInterest>
                                <p>2,671</p>
                                <Interest>
                                    <FontAwesomeIcon icon={faArrowTrendUp} style={{color:"#17B26A"}}/>
                                    <p>6.6%</p>
                                </Interest>
                            </AdInterest>
                        </AdTitle>
                        <AdTitle>
                            <p>Conversion Rate</p>
                            <AdInterest>
                                <p>82%</p>
                                <Interest>
                                    <FontAwesomeIcon icon={faArrowTrendUp} style={{color:"#17B26A"}}/>
                                    <p>8.1%</p>
                                </Interest>
                            </AdInterest>
                        </AdTitle>
                    </AdTrend>
                    <ImageWrapper>
                        <Image src={Graph} alt="Error"/>
                    </ImageWrapper>
                </AdWrapper>
            </Box5Wrapper>
        </Box5Container>
    )
}

export default Box5