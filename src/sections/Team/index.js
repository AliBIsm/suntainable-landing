import React from 'react'
import TeamCard from '../../components/TeamCard'
import { TeamCardWrapper, TeamContainer, TeamSectionTitle, TeamSectionTitleWrapper, TeamWrapper } from './teamElements'
import { TeamData } from './Data'

const index = () => {
    return (
        <TeamContainer id="team">

            <TeamWrapper>
                <TeamSectionTitleWrapper>
                    <TeamSectionTitle>Who we are</TeamSectionTitle>
                </TeamSectionTitleWrapper>
                <TeamCardWrapper>
                    {TeamData.map((item, index) => {
                        return (
                            <TeamCard
                                key={index}
                                image={item.image}
                                name={item.name}
                                title={item.title}
                                linkedin={item.linkedin}
                            />
                        )
                    })}
                </TeamCardWrapper>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default index