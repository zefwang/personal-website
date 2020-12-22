import React from "react"
import Link from "next/link"
import useIsMobile from "./useIsMobile";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const isMobile = useIsMobile();


  return (
    <section className="header">
      <div className="header-name">
        <Link href="/">ZW</Link>
      </div>
      { !isMobile ?
        <div className="header-nav">
          <Link href="/">About Me</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <a className="resume" href="https://zefeng-wang.com/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div> :
        <div className="header-nav-mobile">
          <Menu right >
            <Link href="/" className="menu-time">About Me</Link>
            <Link href="/experience" className="menu-time">Experience</Link>
            <Link href="/projects" className="menu-time">Projects</Link>
            <a className="resume" href="https://zefeng-wang.com/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Menu>
        </div>
      }
    </section>
  )
}

export default Header
