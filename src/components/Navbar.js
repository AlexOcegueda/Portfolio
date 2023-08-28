import React from 'react';
import { Link } from 'gatsby';

//import ResumePDF from '../../public/static/resume.pdf';

const Navbar = () => {
    // const handleResumeClick = () => {
    //     window.open(ResumePDF, '_blank');
    // };

    return (
        <nav>
            <p className='logo'>Alex Ocegueda Castro</p>
            <ul className='nav-links'>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/">Projects</Link>
                {/*<ResumeButton onClick={handleResumeClick}>Resume</ResumeButton>*/}
            </ul>
        </nav>
    );
};

export default Navbar;

