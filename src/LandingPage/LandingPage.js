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
                            <h1>A Creative way to grow your Exciting Business ideas</h1>
                            <p className ="text-gray">A Social Media Manager is responsible for overseeing a company's interactions with the public by implementing social media platforms' content strategies.</p>
                        </div>
                        <Link to="service" smooth={true} ><button className="sponsor btn-green btn-curve">Let's Explore</button></Link>
                    </div>
        </Fade>
                    <Fade right >
                        <div className="hero-section-right">
                           
                            <img className='img-round' src="./images/illustration.png" alt="" />
                         
                        </div>
                    </Fade>
                    </div>
            </div>
    )
}

export default LandingPage