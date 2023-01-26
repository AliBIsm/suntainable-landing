import styled from "styled-components";


export const TeamContainer = styled.div`
background: #010606;

    padding: 0 30px;
 

`;

export const TeamWrapper = styled.div`
   
    display: flex;
    flex-direction: column;

    padding-top: 80px;

    

`;

export const TeamCardWrapper = styled.div`
 display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const TeamSectionTitleWrapper = styled.div`
    border-bottom: 20px solid #F5CA2F;
    padding-bottom: 10px;
    width: 35%;
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;
export const TeamSectionTitle = styled.h1`
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: -25px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }   
`;

export const TeamCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);

        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;





