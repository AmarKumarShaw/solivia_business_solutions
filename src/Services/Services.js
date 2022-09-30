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
            <img src="./images/website_development.svg" alt="" />
            <h4>Website Development</h4>
            <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
          </div>
        </Fade>

        <Fade bottom>
          <div className="service-categories">
            <img src="./images/graphic_designing.svg" alt="" />
            <h4>Graphic Designing</h4>
            <p>Graphic design is a profession, applied art and academic discipline.</p>
          </div>
        </Fade>

        <Fade top>
          <div className="service-categories">
            <img src="./images/google_review.svg" alt="" />
            <h4>Google Business Reviews</h4>
            <p>Google reviews provide useful information and help your business stand out.</p>
          </div>
        </Fade>

        <Fade right>
          <div className="service-categories">
            <img src="./images/tax.svg" alt="" />
            <h4>GST & ITR Filing</h4>
            <p>GST return is a form that a taxpayer registered under the Goods and Services Tax (GST) law must file for every GSTIN that he is registered.</p>
          </div>
        </Fade>
      </div>


    </div>
  )
}

export default Services