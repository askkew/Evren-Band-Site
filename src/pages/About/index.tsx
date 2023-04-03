import React from 'react'
import './about.css'
import { SocialWrapper } from './AboutStyles'

const About = () => {
  return (
    <section id="About">
      <SocialWrapper>
        <a href="https://www.youtube.com/channel/UCgNt2ZBeaOKxQxXkwDb8nUA" className="icon icon--youtube">
          <i className="ri-youtube-line"></i>
        </a>
        <a href="https://open.spotify.com/artist/2cUcpBJ2yvRuSy9uqLriz0?si=7z0MokRRTX2bnkWi4M1Snw&nd=1" className="icon icon--spotify">
          <i className="ri-spotify-line"></i>
        </a>
        <a href="https://music.apple.com/us/artist/evren/1603715012" className="icon icon--apple">
          <i className="ri-apple-line"></i>
        </a>
        <a href="https://www.facebook.com/EvrenBandUSA" className="icon icon--facebook">
          <i className="ri-facebook-box-line"></i>
        </a>
        <a href="https://www.instagram.com/evren.band/?utm_medium=copy_link" className="icon icon--instagram">
          <i className="ri-instagram-line"></i>
        </a>
      </SocialWrapper>
    </section>
  )
}

export default About