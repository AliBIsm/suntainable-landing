import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import { ServiceCardTitle, ServiceIntro, ServiceIntroTitle, ServicesContainer, ServicesWrapper } from './serviceElements'

const index = () => {
    return (
        <ServicesContainer>
            <ServiceIntro>
                <ServiceIntroTitle>Be part of a vibrant community </ServiceIntroTitle>
                <ServiceIntroTitle style={
                    {
                        marginBottom: '20px',
                    }
                }>developing one of our most valuable energy sources</ServiceIntroTitle>
                <ServiceIntroTitle>Join the</ServiceIntroTitle>
                <ServiceIntroTitle style={{
                    borderBottom: '10px solid #F5CA2F',
                }}>
                    National network of solar energy production</ServiceIntroTitle>
            </ServiceIntro>
            <ServicesWrapper>
                <ServiceCardTitle>First, what defines you best?</ServiceCardTitle>
                <ServiceCard title="“I provide the room for solar panels”" btnTitle="Look for investors" img={require('../../images/service1.png')} />
                <ServiceCard title="“I don’t have any space for solar panels”" btnTitle="Co-Fund a project" img={require('../../images/service2.png')} />
                <ServiceCard title="“I am interested in large-scale projects”" btnTitle="Look for projects" img={require('../../images/service3.png')} />
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default index