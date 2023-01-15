import React from 'react'
import styled from 'styled-components';

const ServiceCard = (props) => {
    return (
        <ServiceCardContainer>
            <ServiceCardIcon src={props.img} />

            <ServiceCardWrapper>
                <ServiceCardTitle>{props.title}</ServiceCardTitle>
                <ServiceCardButton>{props.btnTitle}</ServiceCardButton>
            </ServiceCardWrapper>
        </ServiceCardContainer>)
}

const ServiceCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ServiceCardIcon = styled.img`
    height: 140px;
    width: 140px;

`;

const ServiceCardWrapper = styled.div`
    max-width: 1000px;
    margin: 40px;
`;

const ServiceCardTitle = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 10px;
`;


const ServiceCardButton = styled.button`
    padding: 1rem 4rem;
    border: none;
    background: #F5CA2F;
    font-size: 1.5rem;
    border-radius: 10px;
    color: #fff;
    transition: 0.2s ease-out;
    &:hover {
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #010606;
    }
`;



export default ServiceCard