import * as React from "react";
import './global.css'; 
import Navbar from "../components/Navbar";
import projectData from "../components/projects.json"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {

  const metaDescription = "Welcome to my Portfolio. Check out some of my projects!";

  return (
    <>
      <Navbar />
      <h1 id="project-header">Projects</h1>
      <main className="projects">
      {/* PHOBIA DATABASE PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[6].displayName}</h2>
                <span id='tool'>{projectData[6].tools}</span>
                <p className="project-description">{projectData[6].description}</p>
                <a className="github-link" href={projectData[6].link}>See on Github →</a>
            </div>
            <StaticImage
              src="../images/phobia.webp"
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
        </div>
        {/* CLINIC PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[5].displayName}</h2>
                <span id='tool'>{projectData[5].tools}</span>
                <p className="project-description">{projectData[5].description}</p>
                <a className="github-link" href={projectData[5].link}>See on Github →</a>
            </div>
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
              }}
              alt="Project Image"
            />
        </div>
        {/* DOG PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[0].displayName}</h2>
                <span id='tool'>{projectData[0].tools}</span>
                <p className="project-description">{projectData[0].description}</p>
                <a className="github-link" href={projectData[0].link}>See on Github →</a>
            </div>
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
              }}
              alt="Project Image"
            />
        </div>
        {/* PokeAPI PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[1].displayName}</h2>
                <span id='tool'>{projectData[1].tools}</span>
                <p className="project-description">{projectData[1].description}</p>
                <a className="github-link" href={projectData[1].link}>See on Github →</a>
            </div>
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
        </div>
        {/* CPU SIMULATION PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[2].displayName}</h2>
                <span id='tool'>{projectData[2].tools}</span>
                <p className="project-description">{projectData[2].description}</p>
                <a className="github-link" href={projectData[2].link}>See on Github →</a>
            </div>
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
              }}
              alt="Project Image"
            />
        </div>
        {/* PYTHON SCRIPTS PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[3].displayName}</h2>
                <span id='tool'>{projectData[3].tools}</span>
                <p className="project-description">{projectData[3].description}</p>
                <a className="github-link" href={projectData[3].link}>See on Github →</a>
            </div>
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
              }}
              alt="Project Image"
            />
        </div>
        {/* STUDENT DATABASE PROJECT */}
        <div className="project-container">
            <div className="text-container">
                <h2>{projectData[4].displayName}</h2>
                <span id='tool'>{projectData[4].tools}</span>
                <p className="project-description">{projectData[4].description}</p>
                <a className="github-link" href={projectData[4].link}>See on Github →</a>
            </div>
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
              }}
              alt="Project Image"
            />
        </div>
      </main>
    </>
  )
}

export default IndexPage