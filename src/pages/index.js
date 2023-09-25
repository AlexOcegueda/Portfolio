import * as React from "react";
import './global.css'; 
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import projectData from "../components/projects.json";
import { StaticImage } from "gatsby-plugin-image";

export const Head = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" /> 
      </Helmet>
    </>
  );
};

const IndexPage = () => {
  const [dotPosition, setDotPosition] = React.useState({ x: 0, y: 0 });

  const circleRef = React.useRef(null);

  const handleMouseMove = (e) => {
    setDotPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    const updateCirclePosition = () => {
      if (circleRef.current) {
        const circleRect = circleRef.current.getBoundingClientRect();
        circleRef.current.style.left = dotPosition.x - circleRect.width / 2 + 24 + "px";
        circleRef.current.style.top = dotPosition.y - circleRect.height / 2 + 24 + "px";
      }
      requestAnimationFrame(updateCirclePosition);
    };

    updateCirclePosition();
  }, [dotPosition]);

  const [visibleProjects, setVisibleProjects] = React.useState([]);

  React.useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const projectId = entry.target.getAttribute("data-project-id");
        if (entry.isIntersecting) {
          setVisibleProjects((prev) => [...prev, projectId]);
        } else {
          setVisibleProjects((prev) => prev.filter((id) => id !== projectId));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, 
    });

    document.querySelectorAll(".fade-in-out").forEach((project) => {
      observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="circle-container">
        <div
          className="circle"
          ref={circleRef}
        ></div>
        <div className="dot" style={{ left: dotPosition.x, top: dotPosition.y }}></div>
      </div>

      <Navbar />
      <h1 id="project-header">Projects</h1>
      <main className="projects">
        {/* PHOBIA DATABASE PROJECT */}
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("phobia") ? "fade-in" : "fade-out"
          }`}
          data-project-id="phobia"
        >
          <div className="text-container">
            <h2>{projectData[6].displayName}</h2>
            <span id="tool">{projectData[6].tools}</span>
            <p className="project-description">{projectData[6].description}</p>
            <a className="github-link" href={projectData[6].link}>
              See on Github →
            </a>
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("clinic") ? "fade-in" : "fade-out"
          }`}
          data-project-id="clinic"
        >
          <div className="text-container">
            <h2>{projectData[5].displayName}</h2>
            <span id="tool">{projectData[5].tools}</span>
            <p className="project-description">{projectData[5].description}</p>
            <a className="github-link" href={projectData[5].link}>
              See on Github →
            </a>
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("dog") ? "fade-in" : "fade-out"
          }`}
          data-project-id="dog"
        >
          <div className="text-container">
            <h2>{projectData[0].displayName}</h2>
            <span id="tool">{projectData[0].tools}</span>
            <p className="project-description">{projectData[0].description}</p>
            <a className="github-link" href={projectData[0].link}>
              See on Github →
            </a>
          </div>
          <StaticImage
            src="../images/petmatch.webp"
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("pokemon") ? "fade-in" : "fade-out"
          }`}
          data-project-id="pokemon"
        >
          <div className="text-container">
            <h2>{projectData[1].displayName}</h2>
            <span id="tool">{projectData[1].tools}</span>
            <p className="project-description">{projectData[1].description}</p>
            <a className="github-link" href={projectData[1].link}>
              See on Github →
            </a>
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("cpu") ? "fade-in" : "fade-out"
          }`}
          data-project-id="cpu"
        >
          <div className="text-container">
            <h2>{projectData[2].displayName}</h2>
            <span id="tool">{projectData[2].tools}</span>
            <p className="project-description">{projectData[2].description}</p>
            <a className="github-link" href={projectData[2].link}>
              See on Github →
            </a>
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("pythonscripts") ? "fade-in" : "fade-out"
          }`}
          data-project-id="pythonscripts"
        >
          <div className="text-container">
            <h2>{projectData[3].displayName}</h2>
            <span id="tool">{projectData[3].tools}</span>
            <p className="project-description">{projectData[3].description}</p>
            <a className="github-link" href={projectData[3].link}>
              See on Github →
            </a>
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
        <div
          className={`project-container fade-in-out ${
            visibleProjects.includes("database") ? "fade-in" : "fade-out"
          }`}
          data-project-id="database"
        >
          <div className="text-container">
            <h2>{projectData[4].displayName}</h2>
            <span id="tool">{projectData[4].tools}</span>
            <p className="project-description">{projectData[4].description}</p>
            <a className="github-link" href={projectData[4].link}>
              See on Github →
            </a>
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

export default IndexPage;

