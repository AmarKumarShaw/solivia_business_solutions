import React from 'react';
import "./contact.css";
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Contact = () => {
  return (
    <div className='contact'>
        <Fade top>
            <div className="contact-head service-head">
                <p>Want to work with us? </p>
                <h1>Contact Us</h1>
            </div>
        </Fade>
        <div className="contact-section">
            <Fade left>
                <div className="contact-section-left">
                    <img className="contact-us-img" src="./images/contact-us.svg" alt="" />
                </div>
            </Fade>
            <Fade right>
                <div className="contact-section-right">
                    <h1>Feel Free to Reach Out </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, soluta. Placeat aspernatur ratione, hic aliquid mollitia nemo. Odio suscipit sunt dolores rerum cupiditate, maxime unde error repudiandae? Necessitatibus corrupti officia, aliquam nisi dolor ad.</p>
                <div className="contact-btn">
                        <Tada forever>
                            <button className='btn-green'>Email Us</button>
                            <button className='btn-blue'>LinkedIn</button>
                        </Tada>
                </div>
                </div>
            </Fade>
        </div>

    </div>
  )
}

export default Contact;
