import styled from "styled-components";

export const ContactusContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: #010606;
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 480px) {
            }
`;
export const ContactusWrapper = styled.div`
    margin-bottom: 50px;
    margin-top: 200px;


    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 400px;
}
`;


export const MultilineInput = styled.textarea`
    width: 100%;
    padding: 22px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-bottom: 10px;
    height: 150px;
`;

export const ContactusTitleWrapper = styled.div`
    border-bottom: 20px solid #F5CA2F;
    padding-bottom: 10px;
    width: 35%;
    margin-bottom: 60px;
    margin-left: 20px;


    @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;
export const ContactusTitle = styled.h1`
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: -25px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }   
`;


export const Form = styled.form`
width: 100%;
display: flex;
width: 70%;
flex-direction: row;
justify-content:space-evenly;
justify-content: center;
align-items: center;
margin: 0 auto;
@media screen and (max-width: 768px) {
    flex-direction: column;
}
@media screen and (max-width: 480px) {
    width: 400px;
}



`;

export const FormGroup = styled.div`
width: 50%;
padding: 10px;
box-sizing: border-box;

@media screen and (max-width: 768px) {
    width: 100%;
}
@media screen and (max-width: 480px) {
    width: 90%;
}

`;

export const Input = styled.input`
width: 100%;
padding: 22px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-bottom: 30px;
`;

export const TextArea = styled.div`

width: 100%;
padding: 12px;
`;

export const Address = styled.div`
padding: 10px;
box-sizing: border-box;
font-size: 14px;
text-align: center;
`;

export const AddressTitle = styled.h1`
color: #Fff;
`;

export const BtnSubmit = styled.button`
width: 100%;
padding: 22px;
border: 1px solid #ccc;
box-sizing: border-box;
margin-bottom: 30px;
background: #F5CA2F;
color: #fff;
font-size: 18px;
font-weight: bold;
cursor: pointer;
`;