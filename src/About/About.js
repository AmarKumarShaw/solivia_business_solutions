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
        
          <img className='personal-img' src="./images/green-bgsc.jpeg" alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="about-right">
                    <h2>Hi I'm</h2>
                    <h1>Khushi Mondal</h1>
                    <h2>Founder at Star Content Solution </h2>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet atque ipsa sapiente possimus repellat, ut veniam ex consequuntur perspiciatis facilis laboriosam accusantium eum, minus natus excepturi delectus quis? Mollitia temporibus impedit ipsam saepe.</p> */}
                    <p className='text-gray'>I am Khushi,owner and founder at Star Content Solution, with over three years of experience in content writing specialized in academic content writing,blog writing and so on

<br /> <br /> "The right set of words can win people and the world "
</p>
            </div>
          </Fade>
        </div>
    
    </div>
  )
}

export default About