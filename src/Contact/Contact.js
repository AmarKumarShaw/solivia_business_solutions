import React from 'react';
import "./contact.css";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div className='contact'>
            <Fade top>
                <div className="contact-head service-head">
                    <p className='purple'>Want to work with us? </p>
                    <h1 className='purple'>Contact Us</h1>
                </div>
            </Fade>
            <div className="contact-section">
                <Fade left>
                    <div className="contact-section-left">
                        <img className="contact-us-img" src="./images/contact-img2.png" alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="contact-section-right">
                        <h1>Feel Free to Reach Out </h1>
                        <p className='text-gray'>If you have any questions, please feel free to reach out. <br /> We will provide you with a fast response as soon...</p>
                        <div className="contact-btn">
                            <Fade left>
                                <a className="btn-blue btn-yellow-email" href="mailto:info@soliviabusinesssolutions.com">Email Us</a>
                                <a href="https://www.linkedin.com/company/85631084/" className="btn-blue">LinkedIn</a>
                                <a href="https://www.facebook.com/profile.php?id=100085748152603" className="btn-blue-fb">Facebook</a>
                                <a href="https://wa.me/+919088089789" className="btn-blue-fb btn-gr-wp">Whatsapp</a>

                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Contact;
