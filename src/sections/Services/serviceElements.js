import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: #010606;
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 480px) {
            }
`;
export const ServicesWrapper = styled.div`

    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 400px;
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

export const ServiceIntoWrapper = styled.div`
    border-bottom: 20px solid #F5CA2F;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
export const ServiceIntroTitle = styled.h1`
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: -25px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }   
`;


export const ServiceCardTitleWrapper = styled.div`
    border-bottom: 20px solid #F5CA2F;

    padding-bottom: 10px;
    width: 35%; 
    margin-left: 30px;   
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;

    }
    

    `;




export const ServiceCardTitle = styled.h2`
    font-size: 2.5rem;
    align-self: flex-start;
    color: #fff;
    margin-bottom: -25px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const StoresWrapper = styled.div`
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;


    }
`;

