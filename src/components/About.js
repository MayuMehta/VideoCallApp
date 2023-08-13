import React from 'react'
import conf from "../assets/about.jpg"
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className="absolute h-full w-full flex overflow-hidden">
            <img src={conf} className="object-cover w-full h-full" alt='backgrond'/>
        </div>
    </div>
  )
}

export default About
