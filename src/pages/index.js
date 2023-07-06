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
        {projectData.map((project, index) => (
          <Project
            key={index}
            displayName={project.displayName}
            tools={project.tools}
            link={project.link}
            description={project.description}
            imageSrc={index === 0 ?  dogprojectImg : 
                      index === 1 ? pokeImg : 
                      index === 2 ? cpuImg : 
                      index === 3 ? pyScriptImg :
                      databaseImg}
          />
        ))}
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
