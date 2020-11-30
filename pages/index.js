import React from "react";
import Footer from "./footer";
import Header from "./header";
import About from "./about";

export default function Home() {
  return (
    <div className="website-body">
      <Header />
      <section className="intro-page">
        <div className="intro-header">Hi, my name is</div>
        <div className="intro-name">Zefeng (Daniel) Wang.</div>
        <div className="intro-one-liner">I solve problems using technology.</div>
        <div className="intro-sentence">
          I'm a student at Northeastern University and an aspiring software engineer with interest in building
          durable and scalable applications for the web.
        </div>
      </section>
      <About/>
      <Footer/>
    </div>
  )
}
