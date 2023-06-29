import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import Project from "../components/Project"
import styled from "styled-components";
import cpuImg from "../images/cpu.jpg"

const IndexPage = () => {

// Project Descriptions
const cpuDescription = (
  <div>
    <p>
      • Generates 50 computer tasks to sort through using a 3 layered Multi-Level Queue
      <br />
      • Showcases its priority list by simulating interruptions using recursion by introducing new computer tasks
      <br />
      • Uses both Round Robin and First Come First Serve algorithms when sorting through tasks depending on priority
      level
    </p>
  </div>
);

  return (
    <>
      <Navbar />
      <Background>
        <About />
        <Projects>
          <Project
            displayName="Sample Project"
            tools={['Python', 'Java']}
            link="https://example.com"
            description={cpuDescription}
          />
          <Project
            displayName="MultiLevelQueue CPU Scheduler"
            tools={['Java']}
            link="https://example.com"
            description={cpuDescription}
            imageSrc={cpuImg}
          />
        </Projects>
      </Background>
    </>
  )
}

export default IndexPage

// const description = "• Generates 50 computer tasks to sort through using a 3 layered Multi-Level Queue\n\n" +
// "• Showcases its priority list by simulating interruptions using recursion by introducing new computer tasks\n\n" +
// "• Uses both Round Robin and First Come First Serve algorithms when sorting through tasks depending on priority\n\n" +
// "Remote\n" +
// "level";

// const Img = styled.img`
//   display: flex;
//   justify-content: center;
//   width: 20%;
//   height: 20%; 
//   object-fit: cover;
// `;

const Background = styled.body`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(105,105,105);
  max-width: 50rem;
  width: 100%;
  padding: 2rem;
  border-radius: .5rem;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const About = () => {
  return (
  <div>
      {
      <>
        <AboutContainer>
          <h1>About Me</h1>
          <Description>Recent College Graduate with 7 months experience in Software Development</Description>
          <h1>Tools</h1>
          <Skills>
            <Skill>HTML/CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Java</Skill>
            <Skill>Python</Skill>
            <Skill>React</Skill>
            <Skill>SQL</Skill>
          </Skills>
        </AboutContainer>
      </>
      }
  </div>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Skill = styled.li`
  list-style: none;
  margin: 0.5rem
`

const Skills = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0.5rem;
`;

const Description = styled.p`
  font-weight: 500;
  white-space: pre-wrap;
  padding: 1rem 4.5rem;
  margin-bottom: .3rem;
  border-radius: .5rem;
  background-color: lightgray;
  box-shadow: -1px -1px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black; 
`;