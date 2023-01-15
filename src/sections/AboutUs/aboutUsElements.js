import styled from "styled-components";

import img from "../../images/coverPicture.png";

export const AboutUsContainer = styled.div`

    
    padding: 0 30px;
    background-image: url(${img});
    background-size: cover;
    height: 800px;
    z-index: 1;
`;

export const AboutUsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
   


`;

export const AboutUsTitle = styled.h1`
    color: #fff;
    font-size: 48px;

`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;

`;