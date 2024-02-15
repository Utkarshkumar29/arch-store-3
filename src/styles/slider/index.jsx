import styled from "styled-components";

export const SliderContainer=styled.div`
    max-width: 100px;
    width: 100%;    
    height: 100vh;

    @media (max-width:800px) {
        max-width: 70px;
        width: 100%;
    }

    @media (max-width:475px) {
        max-width: 50px;
        width: 100%;
    }

    @media (max-width:426px) {
        display: none;
    }
`

export const SliderWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Box1=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 25px;
    padding: 10px;

    @media (max-width:800px) {
        font-size: 20px;
        padding: 5px;
    }
`

export const Box2=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 10px;
    padding: 10px;
    font-size: 25px;

    @media (max-width:800px) {
        font-size: 20px;
        padding: 5px;
    }
`

export const Image=styled.img`
    width: 50px;

    @media (max-width:800px) {
        width: 25px;
    }
`
