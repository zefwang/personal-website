import React from "react"
import Image from "next/image";

const About = () => {
  const techList = ["Golang", "Java", "React", "Docker", "Kubernetes"];
  return (
    <section className="about-section">
      <div className='about-title'>About Me</div>
      <div className='about-long'>
        Hello! I'm Daniel, a student and software engineer based in Boston, MA. I am passionate about solving problems
        through my technical skills that I continue to develop. I enjoy tackling challenges and hope to leave a lasting,
        positive impact.<br/><br/>
        I'm currently a student at Northeastern, studying Computer Science and Business Administration (concentration in
        Finance), with a minor in Mathematics. I'm currently a project lead at Sandbox, where I am working with a research
        client on developing a multiplayer game that will be used in her reesearch. I also just finished up my first
        co-op as a Software Engineer at Intuit, where I was developing in Java and Go within SBSEG. In my free time,
        I can be found working on side projects (like this one), learning more about the financial markets, or
        absorbing useless information on Reddit.<br/><br/>
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
