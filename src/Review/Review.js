import React from 'react'
import "./review.css";
import Fade from "react-reveal/Fade"

const Review = () => {
  return (
    <div className='review'>
    {/* <div className="review-head service-head">
        <p>TESTIMONIAL</p>
        <h1>Our Happy Clients</h1>
    </div> */}
    
        <Fade left>
            <div className="review-left">
                <p>24 hours customer support</p>
                <h1>Customer support is our main priority with their hundred percent satisfaction.</h1>
                <p>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
            </div>
        </Fade>
            <Fade right> 
                <div className='review-right'>
                  
                        {/* <img className='review-img-1' src="./images/testm-1-f.png" alt="" /> */}
                        {/* <img className='review-img-2' src="./images/testm-2-f.png" alt="" />
                        <h3>Relationship Coach</h3>
                        <div>
                            <img className="star-icon" src="./images/star.png" alt="" />
                            <img className="star-icon" src="./images/star.png" alt="" />
                            <img className="star-icon" src="./images/star.png" alt="" />
                            <img className="star-icon" src="./images/star.png" alt="" />
                            <img className="star-icon" src="./images/star.png" alt="" />
                        </div> */}
                        <img className='support' src="./images/support.png" alt="" />
                        {/* <img className='review-img-3' src="./images/testm-3-f.png" alt="" /> */}
                    
                </div>
            </Fade>
    </div>
    
  )
}

export default Review