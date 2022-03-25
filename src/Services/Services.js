import React from 'react'
import "./services.css"
import Fade from "react-reveal/Fade"

const Services = () => {
  return (
    <div className='service' id="#service">
            <Fade top>
              <div className="service-head">
                  <p>Ideal Soltuion for you</p>
                  <h1>Our Services</h1>
              </div>
            </Fade>
              <Fade bottom>
            <div className="service-list">
                <div className="service-categories">
                  <img src="./images/Download.svg" alt="" />
                  <h4>Social Media Optimization & Management</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae distinctio nihil?</p>
                </div>
              
            
                <div className="service-categories">
                  <img src="./images/message.svg" alt="" />
                  <h4>Content Planning & Creation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae distinctio nihil?</p>
                </div>
            
           
                <div className="service-categories">
                  <img src="./images/crown.svg" alt="" />
                  <h4>Organic Social Media Growth Strategy</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae distinctio nihil?</p>
                </div>
        
             
                <div className="service-categories">
                  <img src="./images/partner.svg" alt="" />
                  <h4>Content Strategy </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae distinctio nihil?</p>
                </div>
              
            </div>
              </Fade>

    </div>
  )
}

export default Services