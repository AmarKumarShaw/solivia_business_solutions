import React from 'react'
import "./innerlayout.css"
import Services from './../Services/Services';
import About from './../About/About';
import Review from './../Review/Review';
import Contact from './../Contact/Contact';
import Grow from '../Grow/Grow';

const InnerLayout = () => {
  return (
    <div  className='inner-layout'>

        <Grow/>
        <Services />
        <About />

        <Review />
        <Contact />
    </div>
  )
}

export default InnerLayout