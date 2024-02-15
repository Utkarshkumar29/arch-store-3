import styled from "styled-components";

export const LogoWrapper=styled.div`
    display: none;

    @media (max-width: 426px) {
        display: flex;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 0px;
    }
`

export const IconWrapper=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #293056;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const Close=styled.div`
    position: relative;
    top: -320px;
    left: 50px;
`