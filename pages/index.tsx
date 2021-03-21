import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "./about";
import Meta from "../components/meta";

export default function Home() {
  return (
    <div className="website-body">
      <Meta
        title="Zefeng Wang's Personal Website"
        desc="Introduction of Zefeng (Daniel) Wang"
        canonical="https://zefeng-wang.com"
      />
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
