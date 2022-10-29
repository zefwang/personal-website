import React from "react"
import Image from "next/image";

const About = () => {
  const techList = ["Python", "Golang", "Java", "React", "K8s", "Elasticsearch"];
  return (
    <section className="about-section">
      <div className='about-title'>About Me</div>
      <div className='about-long'>
        Hi! I'm Daniel, a student and software engineer based in New York City. I am passionate about using my technical
        skills to solve problems. I enjoy tackling challenges and hope to leave a lasting, positive impact.<br/><br/>
        I graduated from Northeastern in 2022, studying Computer Science and Business Administration (concentration in
        Finance), with a minor in Mathematics. I was a project lead at Sandbox, where I worked with research clients on
        developing different experiences such as a multiplayer game that will be used in pysch research. I participated
        in multiple co-ops - my first as a Software Engineer at Intuit, where I was developing in Java and Go within
        SBSEG. I also worked at Goldman Sachs in the Summer of 2021 and Tesla that same fall. In my free time, I can be
        found working on side projects (like this one), learning more about the financial markets, or absorbing useless
        information on Reddit.<br/><br/>
        Some of the technologies I've been working with:
      </div>
      <ul>
        {techList.map((item) => {
          return (
            <div className={`list-${item}`}>
              <Image
                src='/icons/arrow.svg'
                alt='arrow'
                height={10}
                width={10}
              />
              {item}
            </div>
          )
        })}
      </ul>
      <div className='about-end'>Still reading? Checkout my experience and projects above!</div>
    </section>
  )
}

export default About;
