import React from 'react';
import "./landingpage.css";
import Reveal from 'react-reveal/Reveal'; 
import Fade from 'react-reveal/Fade'; 

const LandingPage = () => {
    return (
        
        <div className='hero'>
                <div className='hero-section'>
        <Fade left>
                    <div className="hero-section-left">
                        <div className='hero-section-left-data'>
                            <h1>A Creative way to grow your Exciting Business ideas</h1>
                            <p className ="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Sapiente ullam optio laborum voluptate molestiae aspernatur totam libero <br /> tempora consequuntur suscipit veritatis?</p>
                        </div>
                        <button className="sponsor btn-green btn-curve">Let's Explore</button>
                    </div>
        </Fade>
                    <Fade right >
                        <div className="hero-section-right">
                            <div >
                            <img className='img-round' src="./images/illustration.png" alt="" />
                            </div>
                        </div>
                    </Fade>
                    </div>
            </div>
    )
}

export default LandingPage