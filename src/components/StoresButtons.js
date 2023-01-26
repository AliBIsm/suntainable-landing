import React from 'react'
import styled from 'styled-components';
import { FaApple, FaGooglePlay, FaHtml5 } from 'react-icons/fa'
import { IconContext } from "react-icons";
const StoresButtons = (props) => {
    return (
        <StoresButtonsContainer>
            <IconWrapper>
                {props.type === "android" ? <IconContext.Provider value={{ color: "white", size: "5em" }}>
                    <FaGooglePlay />
                </IconContext.Provider> : props.type === "apple" ? <IconContext.Provider value={{ color: "white", size: "5em" }}>
                    <FaApple />
                </IconContext.Provider> : <IconContext.Provider value={{ color: "white", size: "5em" }}>
                    <FaHtml5 />
                </IconContext.Provider>}

            </IconWrapper>
            <TextWrapper>
                <StoresButtonsTitle>{props.title}</StoresButtonsTitle>
                <StoresSubtitle>{props.subtitle}</StoresSubtitle>
            </TextWrapper>


        </StoresButtonsContainer>
    )
}


const StoresButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width : 271.2px;
    height: 100px;

    align-items: center;
    border: 1px solid white;
    border-width: 5px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #F5CA2F;
        transition: 0.2s ease-out;
    }

    

`;

const IconWrapper = styled.div`
    margin-left: 10px;
`;

const TextWrapper = styled.div`
    
    margin-left: 10px;
    
`;

const StoresButtonsTitle = styled.h2`
    font-size: 1rem;
    color: #fff;
`;

const StoresSubtitle = styled.h2`
    font-size: 1.6rem;
    color: #fff;
    margin-top: -10px;

`;



export default StoresButtons