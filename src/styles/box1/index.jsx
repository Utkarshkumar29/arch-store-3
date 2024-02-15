import styled from "styled-components";

export const Box1Container=styled.div`

`

export const Box1Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px 0px 20px;
    color: #344054;

    @media (max-width:725px) {
        padding: 5px;
    }   
`

export const Box1Heading=styled.p`
    font-size: 25px;
    font-weight: 600;

    @media (max-width:500px) {
        font-size: 23px;
    }

    @media (max-width:426px) {
        font-size: 17px;
    }
`

export const OptionContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
    align-items: center;

    @media (max-width:426px) {
        display: none;
    }
`

export const CustomizeContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 2px solid #D0D5DD;
    border-radius: 10px;
    padding: 10px;
    height: 20px;

    @media (max-width:500px) {
        font-size: 14px;
        padding: 5px;
    }
`

export const ExportContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 2px solid #D0D5DD;
    border-radius: 10px;
    padding: 10px;
    height: 20px;

    @media (max-width:500px) {
        font-size: 14px;
        padding: 5px;
    }
`

export const Bar=styled.div`
    display: none;

    @media (max-width:426px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SearchWrapper=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: #293056;  
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div{
        max-width: 200px;
        width: 100%;
    }
`

export const Close=styled.div`
    position: relative;
    top: -120px;
    left: 200px;
`