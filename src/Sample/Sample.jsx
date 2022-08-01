import React from "react";
import "./sample.css"
import Fade from 'react-reveal/Fade';

const Sample = () => {
    return (
       <Fade bottom>
         <div className="sample_container">
            <p className="sample_para">Check Out our Sample Work</p>
            <h1 className="sample_header">Assignment Sample</h1>
            <div className="sample_assignment_inner_container">
                <div className="sample_assignment">

                    <img className="assignment_img" src="./images/pdf.png" alt="" />
                    <h3>International and Digital Business and Accounting</h3>

                    
                    <button className="assignment_download_btn"><a href="https://drive.google.com/file/d/1jGJSCR4WEGDOpN2YfrAoTf4vM9vX6lRO/view?usp=sharing">Download PDF</a></button>
                </div>
                <div className="sample_assignment">

                    <img className="assignment_img" src="./images/pdf.png" alt="" />
                    <h3>Differences between Oligopoly and Perfect Competition in theory and practice</h3>

                    
                    <button className="assignment_download_btn"><a href="https://drive.google.com/file/d/13cybJwSaLd-IZhb2_Ogy7ec2A6gNkT6R/view?usp=sharing">Download PDF</a></button>
                </div>
                <div className="sample_assignment">

                    <img className="assignment_img" src="./images/pdf.png" alt="" />
                    <h3>Global Marketing and Sales Development</h3>

                    
                    <button className="assignment_download_btn"><a href="https://drive.google.com/file/d/17rdrLnRvFoc9YyabZe7j4Ri4atPf2WEg/view?usp=sharing">Download PDF</a></button>
                </div>
            </div>
        </div>
       </Fade>

    )
}

export default Sample;