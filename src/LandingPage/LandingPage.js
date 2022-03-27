import React from 'react';
import "./landingpage.css";
import Fade from 'react-reveal/Fade'; 
import {Link} from "react-scroll";

const LandingPage = () => {
    return (
        
        <div className='hero'>
                <div className='hero-section'>
        <Fade left>
                    <div className="hero-section-left">
                        <div className='hero-section-left-data'>
                            <h1>A Creative way to grow your Exciting Business Model</h1>
                            <p className ="text-gray">While marketing is used to promote your product or service, branding is used to actively shape your brand and who you are.</p>
                        </div>
                        <Link to="service" smooth={true} ><button className="sponsor btn-green btn-curve">Let's Explore</button></Link>
                    </div>
        </Fade>
                    <Fade right >
                        <div className="hero-section-right">
                           
                            <img className='img-round' src="./images/landing_page_img.png" alt="" />
                         
                        </div>
                    </Fade>
                    </div>
            </div>
    )
}

export default LandingPage