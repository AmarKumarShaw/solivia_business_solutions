import React from 'react'
import "./grow.css";
import Fade from 'react-reveal/Fade'; 

const Grow = () => {
  return (
    <div className='grow'>
    <Fade left >
        <div className="grow-left">
            <img src="./images/grow.png" alt="" />
        </div>
        </Fade>
        <Fade right>
        <div className="grow-right">
        <h2>We give best solution to grow up your business</h2>
        <p>.Digital transformation is one of the driving forces behind long-term growth and success in the modern business world.</p>

        </div>
</Fade>
    </div>
  )
}

export default Grow