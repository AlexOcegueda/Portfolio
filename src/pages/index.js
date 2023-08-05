import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const metaDescription = "My name is Alex Ocegueda Castro and I am a recent college graduate with 7 months experience";

/* NOTES
Added 1 rem to left margin to deal with smaller devices
*/
const About = () => {
    return (
        <>
            <Helmet>
                <title>About Page</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={metaDescription} />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-8NCTHG7Q5S"></script>
                <script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-8NCTHG7Q5S');`}
                </script>
            </Helmet>
            <Navbar />
            <AboutContainer>
                <h1>About Me</h1>
                <Description>
                    Recent Wayne State College graduate with 7 months experience in Software Development.
                    Majored in Computer Science. My last position was a full stack role and I was 
                    completely remote for most of it.
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

    @media screen and (max-width: 768px) { /* Medium screens */
        width: 30rem;
        margin-left: 1rem;
    }

    @media screen and (max-width: 576px) { /* Small screens */
        width: 100%;
        margin-left: 1rem;
    }
`;

const Description = styled.p`
    font-weight: 500;
    @media (max-width: 768px) {
        margin:0 2rem 0 1rem;
    }
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
    );
};

const ToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
    border-radius: 0.5rem;
    margin: 5rem 0 5rem 0;

    @media screen and (max-width: 768px) { /* Medium screens */
        margin: 2rem 1rem 2rem 1rem;
    }
`;

const Skill = styled.li`
    list-style: none;
    @media (max-width: 768px) {
        margin-left: 1rem;
    }
`;

const Skills = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 35%;
    gap: 0.5rem;
    
    @media screen and (max-width: 768px) { /* Medium screens */
        width: 50%;
    }

    @media screen and (max-width: 576px) { /* Small screens */
        width: 100%;
    }
`;
