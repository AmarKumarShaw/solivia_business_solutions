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

            <img className='personal-img' src="./images/Solivia_Laptop.png" alt="" />
          </div>
        </Fade>
        <Fade right>
          <div className="about-right"> 
            <h2>Welcome To</h2>
            <h1>Solivia Business Solutions Pvt. Ltd.</h1>
            <h2>One Stop for all your Business Queries </h2>
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet atque ipsa sapiente possimus repellat, ut veniam ex consequuntur perspiciatis facilis laboriosam accusantium eum, minus natus excepturi delectus quis? Mollitia temporibus impedit ipsam saepe.</p> */}
            <p className='text-gray'>Solivia Business Solutions aims to help small and medium scale business to grow digitally and financially with the best quality service.

              <br /> <br /> "Never give up on your Dreams"
            </p>
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default About