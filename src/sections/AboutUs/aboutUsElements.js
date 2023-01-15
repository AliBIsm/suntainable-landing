import styled from "styled-components";

import img from "../../images/coverPicture.png";

export const AboutUsContainer = styled.div`

    
    padding: 0 30px;
    background-image: url(${img});
    background-size: cover;
    height: 962px;
    z-index: 1;
`;

export const AboutUsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
   


`;



export const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 20px;
    margin-left: 20px;

`;

export const RightSide = styled.div`
    display: flex;
    width: 100%;
        flex-direction: column;

`;
export const AboutUsTitle = styled.h1`
    color: #fff;
    align-self: flex-end;
    font-size: 70px;
    margin-right: 10%;
    font-weight: 800;

`;

export const AboutUsDescription = styled.p`
    color: #000;
`;

