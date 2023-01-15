import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: #010606;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServiceIntro = styled.div`
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 220px;
`;

export const ServiceIntroTitle = styled.h1`
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: -20px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }   
`;


export const ServicesWrapper = styled.div`
    
  
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {

        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServiceCardTitle = styled.h2`
    font-size: 1.8rem;
    position: relative;
    font-weight: 800;
    margin-right: 220px;
    align-self: flex-start;
    color: #fff;
    margin-bottom: 10px;
`;

