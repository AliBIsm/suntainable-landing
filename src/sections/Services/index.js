import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import StoresButtons from '../../components/StoresButtons'

import { ServiceCardTitle, ServiceIntoWrapper, ServiceIntro, ServiceIntroTitle, ServicesContainer, ServicesWrapper, StoresWrapper, ServiceCardTitleWrapper } from './serviceElements'

const index = () => {
    return (
        <ServicesContainer>
            <ServicesWrapper>

                <ServiceIntro>
                    <ServiceIntroTitle>Be part of a vibrant community </ServiceIntroTitle>
                    <ServiceIntroTitle style={
                        {
                            marginBottom: '20px',
                        }
                    }>developing one of our most valuable energy sources</ServiceIntroTitle>
                    <ServiceIntroTitle>Join the</ServiceIntroTitle>

                    <ServiceIntoWrapper>
                        <ServiceIntroTitle>


                            National network of solar energy production</ServiceIntroTitle>

                    </ServiceIntoWrapper>

                </ServiceIntro>


                <ServicesWrapper>
                    <ServiceCardTitleWrapper>
                        <ServiceCardTitle>Choose your way to go</ServiceCardTitle>

                    </ServiceCardTitleWrapper>
                    <ServiceCard title="“I provide the room for solar panels”" btnTitle="Look for investors" img={require('../../images/service1.png')} />
                    <ServiceCard title="“I don’t have any space for solar panels”" btnTitle="Co-Fund a project" img={require('../../images/service2.png')} />
                    <ServiceCard title="“I am interested in large-scale projects”" btnTitle="Look for projects" img={require('../../images/service3.png')} />
                </ServicesWrapper>
                <StoresWrapper>
                    <StoresButtons title='ANDROID APP ON' subtitle='Google Play' type='android' />
                    <StoresButtons title='Download on the' subtitle='App Store' type='apple' />
                    <StoresButtons title='' subtitle='Website' />

                </StoresWrapper>
            </ServicesWrapper>


        </ServicesContainer>
    )
}

export default index