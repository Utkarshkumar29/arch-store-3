import styled from "styled-components";

export const Box3Container=styled.div`
    padding: 20px;

    @media (max-width:595px) {
        padding: 5px;
    }  
`

export const Box3Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`

export const Revenue=styled.div`
    border: 2px solid #D0D5DD;
    padding: 15px;
    border-radius: 10px;
    flex: 1;

    @media (max-width: 595px) {
        max-width: 450px;
        width: 100%;
    }

    @media (max-width: 440px) {
        
    }
`

export const Title=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Heading=styled.p`
    font-weight: 600;
`

export const GraphWrapper=styled.div`
    display: flex;
    justify-content: space-between;

    
`

export const Image=styled.img`
`

export const InterestWrapper=styled.div`
    display: flex;
    flex-direction: column;
`

export const InterestHeading=styled.p`
    margin: 0px;
    font-size: 30px;
    font-weight: 500;
`

export const PerMonth=styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    p:nth-child(1){
        color: #17B26A;
        font-weight: 600;
    }
`

export const Interest=styled.div`
    display: flex;
    gap: 5px;
`

export const ImageWrapper=styled.div`
    display: flex;
    align-items: end;
    padding-bottom: 10px;
`


export const Order=styled.div`
    
`

export const Value=styled.div`
    
`