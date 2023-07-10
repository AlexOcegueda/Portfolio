import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import Project from "../components/Project"
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import projectData from "../components/projects.json"
import cpuImg from "../images/cpu.webp"
import databaseImg from "../images/database.webp";
import pokeImg from "../images/pokemon.webp";
import pyScriptImg from "../images/pythonscripts.webp";
import dogprojectImg from "../images/dog.webp"; 
import clinicImg from "../images/clinic.webp";

const IndexPage = () => {

  const metaDescription = "Welcome to my Portfolio. Check out some of my projects!";

  return (
    <>
      <Helmet>
        <title>Home Page</title>
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
      <h1 id="project-header">Projects</h1>
      <Projects>
        {/* CLINIC PROJECT */}
        <Project 
            displayName={projectData[5].displayName}
            tools={projectData[5].tools}
            link={projectData[5].link}
            description={projectData[5].description}
            imageSrc={clinicImg} 
          />
        {/* DOG PROJECT */}
        <Project 
          displayName={projectData[0].displayName}
          tools={projectData[0].tools}
          link={projectData[0].link}
          description={projectData[0].description}
          imageSrc={dogprojectImg}
        />
        {/* PokeAPI PROJECT */}
        <Project 
          displayName={projectData[1].displayName}
          tools={projectData[1].tools}
          link={projectData[1].link}
          description={projectData[1].description}
          imageSrc={pokeImg}
        />
        {/* CPU SIMULATION PROJECT */}
        <Project 
          displayName={projectData[2].displayName}
          tools={projectData[2].tools}
          link={projectData[2].link}
          description={projectData[2].description}
          imageSrc={cpuImg}
        />
        {/* PYTHON SCRIPTS PROJECT */}
        <Project 
          displayName={projectData[3].displayName}
          tools={projectData[3].tools}
          link={projectData[3].link}
          description={projectData[3].description}
          imageSrc={pyScriptImg}
        />
        {/* STUDENT DATABASE PROJECT */}
        <Project 
          displayName={projectData[4].displayName}
          tools={projectData[4].tools}
          link={projectData[4].link}
          description={projectData[4].description}
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
