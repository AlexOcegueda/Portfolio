import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import Project from "../components/Project"
import styled from "styled-components";
import { Helmet } from 'react-helmet';

import cpuImg from "../images/cpu.webp"
import databaseImg from "../images/database.webp";
import pokeImg from "../images/pokemon.webp";
import pyScriptImg from "../images/pythonscripts.webp";

const IndexPage = () => {

  const metaDescription = "Welcome to my Portfolio. Check out some of my projects!";

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
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Navbar />
      <h1 id="project-header">Projects</h1>
      <Projects>
        <Project
        data-sal="slide-up"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    
          displayName="PokeAPI Pokedex"
          tools={['React', 'JavaScript']}
          link="https://github.com/AlexOcegueda/pokeapi_pokedex"
          description={pokeDescription}
          imageSrc={pokeImg}
        />
        <Project
        data-sal="slide-up"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    
          displayName="CPU Task Simulator"
          tools={['Java']}
          link="https://github.com/AlexOcegueda/MultiLevelQueues"
          description={cpuDescription}
          imageSrc={cpuImg}
        />
        <Project
        data-sal="slide-up"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    
          displayName="Python Scripts"
          tools={['Python', 'Turtle', 'PyQt5']}
          link="https://github.com/AlexOcegueda/Python_Scripts/"
          description={pyScriptDescription}
          imageSrc={pyScriptImg}
        />
        <Project data-sal="slide-up"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    
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
