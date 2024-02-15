import React from "react";
import { Box3Container, Box3Wrapper, GraphWrapper, Heading, Image, ImageWrapper, Interest, InterestHeading, InterestWrapper, Order, PerMonth, Revenue, Title, Value } from "../../styles/box3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faArrowUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Chart1 from "../../assets/Chart.svg"
import Chart2 from "../../assets/Mini.svg"

const Box3=()=>{
    return(
        <Box3Container>
            <Box3Wrapper>
                <Revenue>
                    <Title>
                        <Heading>Today's revenue</Heading>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Title>
                    <GraphWrapper>
                        <InterestWrapper>
                            <InterestHeading>$1,280</InterestHeading>
                            <PerMonth>
                                <FontAwesomeIcon icon={faArrowUp} style={{color:"#17B26A"}}/>
                                <Interest>
                                    <p>15%</p>
                                    <p>last month</p>
                                </Interest>
                            </PerMonth>
                        </InterestWrapper>
                        <ImageWrapper>
                            <Image src={Chart1} alt="Error"/>
                        </ImageWrapper>
                    </GraphWrapper>
                </Revenue>
                <Revenue>
                    <Title>
                        <Heading>Today's orders</Heading>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Title>
                    <GraphWrapper>
                        <InterestWrapper>
                            <InterestHeading>14</InterestHeading>
                            <PerMonth>
                                <FontAwesomeIcon icon={faArrowTrendUp} style={{color:"#17B26A"}}/>
                                <Interest>
                                    <p>10%</p>
                                    <p>last month</p>
                                </Interest>
                            </PerMonth>
                        </InterestWrapper>
                        <ImageWrapper>
                            <Image src={Chart2} alt="Error"/>
                        </ImageWrapper>
                    </GraphWrapper>
                </Revenue>
                <Revenue>
                    <Title>
                        <Heading>Avg. order value</Heading>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Title>
                    <GraphWrapper>
                        <InterestWrapper>
                            <InterestHeading>$91.42</InterestHeading>
                            <PerMonth>
                                <FontAwesomeIcon icon={faArrowUp} style={{color:"#17B26A"}}/>
                                <Interest>
                                    <p>20%</p>
                                    <p>last month</p>
                                </Interest>
                            </PerMonth>
                        </InterestWrapper>
                        <ImageWrapper>
                            <Image src={Chart1} alt="Error"/>
                        </ImageWrapper>
                    </GraphWrapper>
                </Revenue>
            </Box3Wrapper>
        </Box3Container>
    )
}

export default Box3