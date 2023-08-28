import React from 'react';
import Navbar from '../components/Navbar';

const metaDescription = "My name is Alex Ocegueda Castro and I am a recent college graduate with 7 months experience";

/* NOTES
Added 1 rem to left margin to deal with smaller devices
*/
const About = () => {
    const [dotPosition, setDotPosition] = React.useState({ x: 0, y: 0 });

    const circleRef = React.useRef(null);

    const handleMouseMove = (e) => {
        setDotPosition({ x: e.clientX, y: e.clientY });
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    React.useEffect(() => {
        const updateCirclePosition = () => {
            if (circleRef.current) {
            const circleRect = circleRef.current.getBoundingClientRect();
            circleRef.current.style.left = dotPosition.x - circleRect.width / 2 + 24 + "px";
            circleRef.current.style.top = dotPosition.y - circleRect.height / 2 + 24 + "px";
        }
        requestAnimationFrame(updateCirclePosition);
    };

    updateCirclePosition();
    }, [dotPosition]);

    return (
        <>
            <div className="circle-container">
                <div
                  className="circle"
                  ref={circleRef}
                ></div>
                <div className="dot" style={{ left: dotPosition.x, top: dotPosition.y }}></div>
            </div>
            
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
