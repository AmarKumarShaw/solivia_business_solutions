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
                            <h1>A Digital way to grow your Exciting Business Model</h1>
                            <p className ="text-gray">A Digital growth strategy tackles all angles on your brand's online presence and looks at what improvements can be made with the direct objective of achieving business growth.</p>
                        </div>
                        <Link to="grow" smooth={true} ><button className="sponsor btn-green btn-curve">Let's Explore</button></Link>
                    </div>
        </Fade>
                    <Fade right >
                        <div className="hero-section-right">
                           
                            <img className='img-round' src="./images/business-powerful.svg" alt="" />
                         
                        </div>
                    </Fade>
                    </div>
            </div>
    )
}

export default LandingPage