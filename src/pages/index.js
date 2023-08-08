import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import projectData from "../components/projects.json"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {

  const metaDescription = "Welcome to my Portfolio. Check out some of my projects!";

  return (
    <>
      <Navbar />
      <h1 id="project-header">Projects</h1>
      <Projects>
        <h1>test</h1>
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

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    width: 40rem;
    height: 15rem;
    margin-top: 2rem;
    padding: 1rem;

    @media screen and (max-width: 768px) { /* Medium screens */
        width: 30rem;
        height: 13rem;
    }

    @media screen and (max-width: 576px) { /* Small screens */
        width: 25rem;
        flex-direction: column;
        height: auto;
    }
`;

const Tools = styled.span`
    display: flex;
    font-weight: semi-bold;
`;

const Link = styled.a`
    margin-left: 0.3rem;
    font-weight: semi-bold;
`;

const Description = styled.p`
    color: white;
    margin-right: .5rem;
`;
