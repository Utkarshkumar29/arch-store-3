import styled from "styled-components";

export const Box5Container=styled.div`
    padding: 20px;

    @media (max-width:725px) {
        padding: 5px;
    }
`

export const Box5Wrapper=styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width:725px) {
        gap: 5px;
    }
`

export const TrendWrapper=styled.div`
    display: flex;
    flex: 1;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
`

export const Industry=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;

    &::after{
        content: "";
        position: absolute;
        top: 70px;
        left: 0px;
        border-bottom: 2px solid #E5E7EB;
        display: block;
        width: 100%;
    }
`

export const PieChartWrapper=styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    align-items: center;

    @media (max-width:1100px) {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    } 

    @media (max-width:1100px) {
        gap: 5px;
    } 
`

export const PieChartDetails=styled.div`
      @media (max-width:1100px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    } 
`

export const PointsWrapper=styled.div`
    margin-top: 50px;

    p:nth-child(1){
        font-size: 20px;
        font-weight: 700;
        margin: 0;
    }

    p:nth-child(2){
        position: relative;
        padding-left: 20px;
        margin: 0;

        &::before{
            content: "";
            position: absolute;
            top: 6px;
            left: 0px;
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

        @media (max-width:426px) {
            font-size: 14px;
            justify-content: center;
        }
    }
`

export const Pattern=styled.p`
    &::before{
        background-color: #071C47;
    }
`

export const Wooden=styled.p`
    &::before{
        background-color: #2C678E;
    }
`

export const Stone=styled.p`
    &::before{
        background-color: #E1A739;
    }
`

export const InfoWrapper=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1B5A84;
    background-color: #EFF6FA;
    border-radius: 10px;
    padding: 10px;
`

export const AdWrapper=styled.div`
    display: flex;
    flex: 1;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    flex-direction: column;
`

export const AdTrend=styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @media (max-width:426px) {
        gap: 10px;
    }
`

export const AdTitle=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;

    p{
        padding: 0;
        margin: 0;

        @media (max-width:426px) {
            margin: 5px;
        }
    }
`

export const AdInterest=styled.div`
    display: flex;

    p:nth-child(1){
        font-size: 30px;
    }
`

export const Interest=styled.div`
    display: flex;  
    gap: 10px;
    align-items: center;
    padding-bottom: 20px;
`

export const ImageWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const Pie=styled.img`
    max-width: 300px;
    width: 100%;
    height: auto;

    @media (max-width:555px) {
        margin-top: 10px;
    }
`

export const Image=styled.img`
    max-width: 700px;
    width: 100%;
    height: auto;
`