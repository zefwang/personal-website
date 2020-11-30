import React from "react"
import Footer from "./footer";
import Header from "./header";
import ProjectsJSON from "../public/projects.json";
import Image from "next/image";

const ProjectObj = ({project}) => {
  const name = project["name"];
  const link = project["link"];
  const description = project["description"];
  const picLink = project["picLink"];

  return (
    <div className={`project-individual-${name}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={picLink}
          alt={`${name}-pic`}
          height={250}
          width={400}
        />
      </a>
      <div className={`project-name-${name}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
      </div>
      <div className={`project-description-${name}`}>{description}</div>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <Header/>
      <div className="project-div">
        {ProjectsJSON.map((project) => {
          return (<ProjectObj project={project}/> )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Projects;
