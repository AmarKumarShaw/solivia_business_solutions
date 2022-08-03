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
                        <img className="contact-us-img" src="./images/contact_img.png" alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="contact-section-right">
                        <h1>Feel Free to Reach Out </h1>
                        <p className='text-gray'>If you have any questions, please feel free to reach out. <br /> We will provide you with a fast response as soon...</p>
                        <div className="contact-btn">
                            <Fade left>
                                <a className="btn-blue btn-yellow-email" href="mailto:starcontentsolutions@gmail.com">Email Us</a>
                                <a href="https://www.linkedin.com/in/star-content-solutions-834177247" className="btn-blue">LinkedIn</a>
                                <a href="https://www.facebook.com/Star-Content-Solutions-100362146115652" className="btn-blue-fb">Facebook</a>
                                <a href="https://wa.me/+917449968386" className="btn-blue-fb btn-gr-wp">Whatsapp</a>

                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Contact;
