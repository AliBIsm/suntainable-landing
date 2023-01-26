import React from 'react'
import styled from 'styled-components';

const TeamCard = (props) => {
    return (
        <TeamCardContainer>
            <TeamCardIcon src={props.image} />
            <TeamInfoWrapper>
                <TeamCardTitle>{props.name}</TeamCardTitle>
                <TeamCardSubtitle>{props.title}</TeamCardSubtitle>
            </TeamInfoWrapper>

        </TeamCardContainer>)
}

const TeamCardContainer = styled.div`
    justify-content:center;
    align-items:center;
    display: flex;
    flex-direction: column;
    
`;

const TeamCardIcon = styled.img`
    width: 199px;
    height: 199px;
    margin-left: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.12);

        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamInfoWrapper = styled.div`
    max-width: 1000px;
    margin: 40px;
`;

const TeamCardTitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
`;

const TeamCardSubtitle = styled.h2`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 10px;
`;



export default TeamCard