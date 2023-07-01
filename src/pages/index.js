import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import Project from "../components/Project"
import styled from "styled-components";
import cpuImg from "../images/cpu.jpg"

const IndexPage = () => {

  const cpuDescription = (
      <p>
        Uses a 3 layered priority queue algoritm to simulate how a CPU schudules
        incoming tasks. Uses Round Robin and First Come First Serve algoritms as well.
      </p>
  );

  return (
    <>
      <Navbar />
      <h1>Projects</h1>
      <Projects>
        <Project
          displayName="Sample Project"
          tools={['Python', 'Java']}
          link="https://example.com"
          description={cpuDescription}
          imageSrc={cpuImg}
        />
        <Project
          displayName="CPU Task Simulator"
          tools={['Java']}
          link="https://github.com/AlexOcegueda/MultiLevelQueues"
          description={cpuDescription}
          imageSrc={cpuImg}
        />
        <Project
          displayName="CPU Task Simulator"
          tools={['Java']}
          link="https://github.com/AlexOcegueda/MultiLevelQueues"
          description={cpuDescription}
          imageSrc={cpuImg}
        />
      </Projects>
    </>
  )
}

export default IndexPage

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
