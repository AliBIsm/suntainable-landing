import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import styled from 'styled-components';


const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }
    console.log('dsadsa', i18next.t('aboutUs.description'));

    return (
        <LanguageSwitcherContainer>
            <LanguageSwitcherButton onClick={() => handleChangeLanguage('en')}>Lëtzebuergesch</LanguageSwitcherButton>
            <LanguageSwitcherButton onClick={() => handleChangeLanguage('fr')}>Deutsch</LanguageSwitcherButton>
            <LanguageSwitcherButton onClick={() => handleChangeLanguage('fr')}>Français</LanguageSwitcherButton>

            <LanguageSwitcherButton onClick={() => handleChangeLanguage('fr')}>English</LanguageSwitcherButton>

        </LanguageSwitcherContainer>
    )
}

const LanguageSwitcherContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
`;
const LanguageSwitcherButton = styled.button`
    width: 140px;
    height: 50px;
    background-color: transparent;
    margin-right: 10px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #000;
    }


`;

export default LanguageSwitcher