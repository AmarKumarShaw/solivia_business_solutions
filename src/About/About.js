import React from 'react';
import "./about.css";
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <div className="about">
    <Fade top>
      <div className="about-head service-head">
          <p>Who am I ?</p>
          <h1>About Me</h1>
      </div>
    </Fade>

      <div className="about-section">
          <Fade left>
            <div className="about-left">
        
          <img className='personal-img' src="./images/green-bgsc.png" alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="about-right">
                    <h2>Hi I'm</h2>
                    <h1>Rashi Chakaraborty</h1>
                    <h2>Your Social Media Manager </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet atque ipsa sapiente possimus repellat, ut veniam ex consequuntur perspiciatis facilis laboriosam accusantium eum, minus natus excepturi delectus quis? Mollitia temporibus impedit ipsam saepe.</p>
            </div>
          </Fade>
        </div>
    
    </div>
  )
}

export default About