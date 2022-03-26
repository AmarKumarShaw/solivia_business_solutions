import React from 'react'
import "./services.css"
import Fade from "react-reveal/Fade"

const Services = () => {
  return (
    <div className='service' id="service">
            <Fade top>
              <div className="service-head service-head-sm">
                  <p>Ideal Soltuion for you</p>
                  <h1>Our Services</h1>
              </div>
            </Fade>
              
            <div className="service-list">
                <Fade left>
                  <div className="service-categories">
                    <img src="./images/download.svg" alt="" />
                    <h4>Social Media Optimization & Management</h4>
                    <p>The use of social media networks to manage and grow an organization's message and online presence. </p>
                  </div>
                </Fade>
            
                <Fade bottom>
                  <div className="service-categories">
                    <img src="./images/message.svg" alt="" />
                    <h4>Content Planning & Creation</h4>
                    <p>A content plan determines the content you hope to create and sets expectations for how it should be created.</p>
                  </div>
                </Fade>
           
                <Fade top>
                  <div className="service-categories">
                    <img src="./images/crown.svg" alt="" />
                    <h4>Organic Social Media Growth Strategy</h4>
                    <p>Organic social media refers to the free content that all users share with each other on their feeds.</p>
                  </div>
                </Fade>
             
                <Fade right>
                  <div className="service-categories">
                    <img src="./images/partner.svg" alt="" />
                    <h4>Content Strategy </h4>
                    <p>A content strategy is a plan in which you use content to achieve your business goals.</p>
                  </div>
                </Fade>
            </div>
              

    </div>
  )
}

export default Services