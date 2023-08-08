import React from 'react';
import Navbar from '../components/Navbar';

const metaDescription = "My name is Alex Ocegueda Castro and I am a recent college graduate with 7 months experience";

/* NOTES
Added 1 rem to left margin to deal with smaller devices
*/
const About = () => {
    return (
        <>
            
            <Navbar />
            <div className='about-container'>
                <h1>About Me</h1>
                <p className='about-description'>
                    Recent Wayne State College graduate with 7 months experience in Software Development.
                    Majored in Computer Science. My last position was a full stack role and I was 
                    completely remote for most of it.
                </p>   
            </div>
            <Tools />
        </>
    );
};

export default About;

const Tools = () => {
    return (
        <>
            <div className='tools-container'>
                <h1 className="tools-header">Tools</h1>
                <ul className='skills'>
                    <li className='skill'>HTML/CSS</li>
                    <li className='skill'>JavaScript</li>
                    <li className='skill'>Java</li>
                    <li className='skill'>Python</li>
                    <li className='skill'>React</li>
                    <li className='skill'>SQL</li>
                </ul>
            </div>
        </>
    );
};
