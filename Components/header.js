import React from "react"
import Link from "next/link"
import useIsMobile from "./useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <section className="header">
        <div className="header-name">
          <Link href="/">ZW</Link>
        </div>
        <div className="header-nav">
          <Link href="/">About Me</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <a className="resume" href="https://github.com/zefwang/resume/raw/master/zefeng_wang_resume.pdf">Resume</a>
        </div>
      </section>
    )
  } else {
    return (
      <section className='header-mobile'>
        Mobile
      </section>
    )
  }

}

export default Header
