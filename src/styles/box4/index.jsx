import styled from "styled-components";

export const Box4Container=styled.div`
    padding: 20px;

    @media (max-width:725px) {
        padding: 5px;
    }
`

export const Box4Wrapper=styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

export const MarketContainer=styled.div`
    border: 2px solid lightgray;
    border-radius: 20px;
    flex: 1.5;
    max-width: 800px;
    width: 100%;
`

export const MarketWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

export const MarketDescription=styled.div`
`

export const CurentMarket=styled.div`
    padding: 0px;
    font-weight: 600;
    font-size: 20px;


    @media (max-width:426px) {
        font-size: 15px;
    }
`

export const Rating=styled.div`
    padding: 0px;

    @media (max-width:426px) {
        font-size: 12px;
        padding-right: 5px;
    }
`

export const TimePeriod=styled.div`
    display: flex;
    flex-direction: row;

    p{
        border: 1px solid lightgray;
        padding: 4px;
    }

    p:nth-child(1){
        background-color: #F9FAFB;
    }
`

export const CategoryWrapper=styled.div`
    background-color: #F9FAFB;
    display: flex;
    align-items: center;
    gap: 40px;
    border-radius: 10px;
    border: 2px solid lightgray;
    color: #667085;
    margin: 10px;

    p:nth-child(1){
        background-color: #FFFFFF;
        padding: 5px;
        margin-left: 5px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    p:nth-child(5){
        padding-right: 5px;
    }

    @media (max-width:595px) {
        font-size: 15px;
        gap: 5px;
        flex-wrap: wrap;
        flex: 1;
        justify-content: center;
    }  
`

export const NoteWrapper=styled.div`
    background-color: #EAC180;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 0 0 18px 18px;
    font-size: 30px;

    @media (max-width:426px) {
        font-size: 17px;
    }
`

export const Note=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Note1=styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 20px;

    @media (max-width:600px) {
        font-size: 17px;
    }

    @media (max-width:426px) {
        font-size: 14px;
    }
`

export const Note2=styled.p`
    margin: 0;

    @media (max-width:426px) {
        font-size: 12px;
    }
`

export const MeterWrapper=styled.div`
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 20px;
    flex: 1;
` 

export const Industry=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

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

export const ImageWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const TextWrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

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

export const PointsWrapper=styled.div`
    margin-top: 50px;

    p:nth-child(1),p:nth-child(2),p:nth-child(3){
        position: relative;
        padding-left: 20px;

        &::before{
            content: "";
            position: absolute;
            top: 6px;
            left: 0px;
            background-color: #10B981;
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
    }

    p:nth-child(2){
        &::before{
            background-color: #BFDE8D;
        }
    }

    p:nth-child(3){
        &:before{
            background-color: #047857;   
        }
    }
`

export const Image=styled.img`
    max-width: 800px;
    width: 100%;
    height: auto;
`