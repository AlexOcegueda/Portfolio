import * as React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Title>Web Developer Portfolio</Title>
      <About />
    </>
  )
}

export default IndexPage

const Title = styled.h1`
display: flex;
justify-content: center;
  font-weight: bold;
  font-size: 3rem;
`;

const About = () => {
  return (
  <div>
      {
      <>
          <H1>About Me</H1>
          <Description>7 months experience in software development, Recent Computer Science Graduate</Description>
          <Skills>
            <Skill>HTML/CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>React</Skill>
            <Skill>Postgres</Skill>
          </Skills>
      </>
      }
  </div>
  );
};

const Skill = styled.li`
  list-style: none;
`

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 10px;
`;

const H1 = styled.h1`
  font-weight: bold;

`