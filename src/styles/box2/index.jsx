import styled from "styled-components";

export const Box2Container=styled.div`
    padding: 20px;

    @media (max-width:725px) {
        padding: 5px;
    }
`

export const Box2Wrapper=styled.div`
    display: flex;
    gap: 20px;
    position: relative;
    font-size: 20px;
    font-weight: 500;

    &::after{
        content: "";
        position: absolute;
        top: 60px;
        left: 0px;
        border-bottom: 2px solid #E5E7EB;
        display: block;
        width: 100%;
    }
`

export const Market=styled.p`
`

