import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutContainer>
                <h1>About Me</h1>
                <Description>
                    Recent Wayne State College graduate with 7 months experience in Software Development.
                    Majored in Computer Science. My last position was a full stack role and I was 
                    completely remote for most of it. I also have freelancing experience which is included 
                    in my projects.
                </Description>   
            </AboutContainer>
            <Tools />
        </>
    );
};

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 41rem;
`;


const Description = styled.p`
    font-weight: 500;
`;

const Tools = () => {
    return (
        <>
            <ToolsContainer>
                <h1 className="tools-header">Tools</h1>
                <Skills>
                    <Skill>HTML/CSS</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>Java</Skill>
                    <Skill>Python</Skill>
                    <Skill>React</Skill>
                    <Skill>SQL</Skill>
                </Skills>
            </ToolsContainer>
        </>
    )
}

const ToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
    border-radius: .5rem;
    margin: 5rem 0 5rem 0;
`

const Skill = styled.li`
    list-style: none;
`

const Skills = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 35%;
    gap: .1rem;
`;