import React from "react"
import Image from "next/image"

const Footer = () => {
  const iconSize = 30;

  return (
    <section className="footer">
      <div className="footer-text">
        <i>Designed and Built by</i> Zefeng (Daniel) Wang
      </div>
      <div className="social-icons">
        <a href="https://github.com/zefwang" target="_blank"
           rel="noopener noreferrer">
          <Image
            src='/icons/github-icon.svg'
            alt='github icon'
            width={iconSize}
            height={iconSize}
          />
        </a>
        <a href="https://www.linkedin.com/in/zefeng-daniel-wang/"
           target="_blank" rel="noopener noreferrer">
          <Image
            src='/icons/linkedin-icon.svg'
            alt='linkedin icon'
            width={iconSize}
            height={iconSize}
          />
        </a>
        <a href="mailto:dnl.wang@gmail.com" target="_blank"
           rel="noopener noreferrer">
          <Image
            src='/icons/gmail-icon.svg'
            alt='gmail icon'
            width={iconSize}
            height={iconSize}
          />
        </a>
        <a href="https://www.instagram.com/dnlwang/" target="_blank"
           rel="noopener noreferrer">
          <Image
            src='/icons/instagram-icon.svg'
            alt='instagram icon'
            width={iconSize}
            height={iconSize}
          />
        </a>
      </div>
    </section>
  )
}

export default Footer
