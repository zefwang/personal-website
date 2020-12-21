import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <section className="header">
      <div className="header-name">
        <Link href="/">ZW</Link>
      </div>
      <div className="header-nav">
        <Link href="/">About Me</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <a className="resume" href="https://zefeng-wang.com/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </section>
  )
}

export default Header
