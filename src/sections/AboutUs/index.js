import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { AboutUsContainer, AboutUsDescription, AboutUsHeader, AboutUsTitle, Logo, RightSide } from './aboutUsElements';
import LanguageSwitcher from '../../components/LanguageSwitcher';

console.log('dsadsa',);

const Index = () => {
    const { t, i18n } = useTranslation();

    return (
        <AboutUsContainer>
            <AboutUsHeader>
                <Logo src={require('../../images/logoMadeIn.png')} />
                <LanguageSwitcher />



            </AboutUsHeader>
            <RightSide>
                <AboutUsTitle>{t('aboutUs.title')}</AboutUsTitle>

            </RightSide>

        </AboutUsContainer>
        // <div>
        //     <p></p>
        //     <h1>{t('aboutUs.title')}</h1>
        //     <p>{t('aboutUs.description')}</p>
        // </div>
    )
}

export default Index