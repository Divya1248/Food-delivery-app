import React from 'react'
import LeftAbout from './LeftAbout'
import RightAbout from './RightAbout'
import "./About.css"

const About = () => {
    return (
      <div className="Block">
        <section className="About">
          <article>
           
            
              <LeftAbout />
              <RightAbout />
            
          </article>
        </section>
      </div>
    );
}

export default About
