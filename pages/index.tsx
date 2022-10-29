import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "./about";
import Meta from "../components/meta";

export default function Home() {
  return (
    <div className="website-body">
      <Meta
        title="Zefeng (Daniel) Wang"
        desc="Introduction of Zefeng (Daniel) Wang"
        canonical="https://zefeng-wang.com"
      />
      <Header />
      <section className="intro-page">
        <div className="intro-name">Hi, I'm Daniel.</div>
        <div className="intro-one-liner">I like to solve problems using technology.</div>
        <div className="intro-sentence">
          I'm a software engineer at Datadog and recent graduate of Northeastern University with interest in building
          durable and scalable web applications.
        </div>
      </section>
      <About/>
      <Footer/>
    </div>
  )
}
