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
        <Container>
            <Text>
                <h2>{projectData[5].displayName}</h2>
                <Tools id='tool'>{projectData[5].tools}</Tools>
                <Description>{projectData[5].description}</Description>
                <Link href={projectData[5].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/clinic.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
                // Add any other styles you need
              }}
              alt="Project Image"
            />
        </Container>
        {/* DOG PROJECT */}
        <Container>
            <Text>
                <h2>{projectData[0].displayName}</h2>
                <Tools id='tool'>{projectData[0].tools}</Tools>
                <Description>{projectData[0].description}</Description>
                <Link href={projectData[0].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/dog.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
                // Add any other styles you need
              }}
              alt="Project Image"
            />
        </Container>
        {/* PokeAPI PROJECT */}
        <Container>
            <Text>
                <h2>{projectData[1].displayName}</h2>
                <Tools id='tool'>{projectData[1].tools}</Tools>
                <Description>{projectData[1].description}</Description>
                <Link href={projectData[1].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/pokemon.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
              }}
              alt="Project Image"
            />
        </Container>
        {/* CPU SIMULATION PROJECT */}
        <Container>
            <Text>
                <h2>{projectData[2].displayName}</h2>
                <Tools id='tool'>{projectData[2].tools}</Tools>
                <Description>{projectData[2].description}</Description>
                <Link href={projectData[2].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/cpu.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
                // Add any other styles you need
              }}
              alt="Project Image"
            />
        </Container>
        {/* PYTHON SCRIPTS PROJECT */}
        <Container>
            <Text>
                <h2>{projectData[3].displayName}</h2>
                <Tools id='tool'>{projectData[3].tools}</Tools>
                <Description>{projectData[3].description}</Description>
                <Link href={projectData[3].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/pythonscripts.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
                // Add any other styles you need
              }}
              alt="Project Image"
            />
        </Container>
        {/* STUDENT DATABASE PROJECT */}
        <Container>
            <Text>
                <h2>{projectData[4].displayName}</h2>
                <Tools id='tool'>{projectData[4].tools}</Tools>
                <Description>{projectData[4].description}</Description>
                <Link href={projectData[4].link}>See on Github →</Link>
            </Text>
            <StaticImage
              src="../images/database.webp"
              layout="fixed"
              width={500}
              height={200}
              style={{
                borderRadius: '1rem',
                objectFit: 'cover',
                maxWidth: '100%',
                height: 'auto',
                // Add any other styles you need
              }}
              alt="Project Image"
            />
        </Container>
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
