import React from "react";

import ExperienceJSON from "../public/experience.json";
import Header from "../components/header";
import Footer from "../components/footer";

const JobObj = ({jobJSON}) => {
  const name = jobJSON["name"];
  const title = jobJSON["role"];
  const dates = jobJSON["dates"];
  const website = jobJSON["website"];
  const description = jobJSON["description"];
  const techList = jobJSON["tech"];

  return (
    <div className={`job-object-${name}`}>
      <div className={`job-header-${name}`}>
        <div className={`job-role-name-${name}`}>
          {title}
          <div className={`job-name-${name}`}>
            <a href={website} target="_blank" rel="noopener noreferrer">@ {name}</a>
          </div>
        </div>
        <div className={`job-dates-${dates}`}>{dates}</div>
      </div>
      <div className={`job-description-${name}`}>{description}</div>
      {techList.length > 0 &&
        <div className={`job-tech-list-${name}`} >
          {techList.map((tech) => {
            return (<div className={`tech-item-${name}-${tech}`}>{tech}</div> )
          })}
        </div>
      }
    </div>
  )
}

const Experience = () => {
  return (
    <div>
      <Meta
        title="Experience | Zefeng Wang"
        desc="Work Experience of Zefeng (Daniel) Wang"
        canonical="https://zefeng-wang.com"
      />
      <Header/>
      <div className="experience-div">
        {ExperienceJSON.map((exp) => {
          return (<JobObj jobJSON={exp}/>)
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Experience;
