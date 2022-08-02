import React from 'react'
import "./testimonial.css"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
      <div className='testimonial' id="testimonials">
    <Fade top >
        <div className="testimonial-head service-head">
            <p>TESTIMONIAL</p>
            <h1>Our Happy Clients</h1>
        </div>
        </Fade>
            <div className="testimonial-section">
           
                <div className="testimonial-review">
                <Fade left>
                <div className="review_box">
                    <p className="review_box_heading">
                        Rohit Kumar 

                    </p>
                    <hr />
                    <p className="review_box_comment">
                         Whoever has done it <br /> It's a Good Report
                    </p>
                    <p className="review_star">
                    ⭐⭐⭐⭐⭐
                    </p>
                </div>
                </Fade>
                </div>
                <div className="testimonial-review">
                <Fade bottom>
                <div className="review_box">
                    <p className="review_box_heading">
                        Anamika 

                    </p>
                    <hr />
                    <p className="review_box_comment">
                    Broththe report is good, just some small changes the professor has asked to add brand onion diagram. You may find brand onion diagrams in a sample file of Kitkat. That's it the rest of the report is good <br /> It's a Good Report
                    </p>
                    <p className="review_star">
                    ⭐⭐⭐⭐⭐
                    </p>
                </div>

                </Fade>
                </div>
                <div className="testimonial-review">
                <Fade right>
                <div className="review_box">
                    <p className="review_box_heading">
                        Nidhi kumari

                    </p>
                    <hr />
                    <p className="review_box_comment">
                   

Hope for the best Good job. Looking for a long term collab 

                    </p>
                    <p className="review_star">
                    ⭐⭐⭐⭐⭐
                    </p>
                </div>
                </Fade>
                </div>
            </div>
    </div>
        
  )
}

export default Testimonial