import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import Project from "../components/Project"
import styled from "styled-components";

import cpuImg from "../images/cpu.jpg"
import databaseImg from "../images/database.jpg";
import pokeImg from "../images/pokemon.jpg";
import pyScriptImg from "../images/pythonscripts.jpg";

const IndexPage = () => {

  const cpuDescription = (
      <p>
        Uses a 3 layered priority queue algorithm to simulate how a CPU schudules
        incoming tasks. Utilizes Round Robin and First Come First Serve algoritms as well.
      </p>
  );

  const pokeDescription = (
    <p>
      Built mobile friendly website to display original 151 pokemon.
    </p>
  );

  const studentDescription = (
    <p>
      This is a SpringBoot project of a student database. 
      It is connected with an external SQL database and performs basic CRUD commands. 
    </p>
  );

  const pyScriptDescription = (
    <p>
      Collection of Python scripts i've done in and outside of college.
    </p>
  );

  return (
    <>
      <Navbar />
      <h1>Projects</h1>
      <Projects>
        <Project
          displayName="PokeAPI Pokedex"
          tools={['React', 'JavaScript']}
          link="https://github.com/AlexOcegueda/pokeapi_pokedex"
          description={pokeDescription}
          imageSrc={pokeImg}
        />
        <Project
          displayName="CPU Task Simulator"
          tools={['Java']}
          link="https://github.com/AlexOcegueda/MultiLevelQueues"
          description={cpuDescription}
          imageSrc={cpuImg}
        />
        <Project
          displayName="Python Scripts"
          tools={['Python', 'Turtle', 'PyQt5']}
          link="https://github.com/AlexOcegueda/Python_Scripts/"
          description={pyScriptDescription}
          imageSrc={pyScriptImg}
        />
        <Project
          displayName="Student Database"
          tools={['Java, SpringBoot, MySQL']}
          link="https://github.com/AlexOcegueda/MultiLevelQueues"
          description={studentDescription}
          imageSrc={databaseImg}
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
