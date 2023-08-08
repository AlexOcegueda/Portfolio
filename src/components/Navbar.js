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

// const ResumeButton = styled.button`
//     margin-right: 1rem;
//     font-weight: 400;
//     font-size: 14px;
//     list-style: none;
//     cursor: pointer;
//     text-decoration: none;
//     color: black;
//     background-color: #F1BF98;
//     border: 1px solid black;
//     border-radius: 1rem;
//     padding: .5rem 1rem .5rem 1rem;
//     vertical-align: middle; /* Align the button vertically */
//     &:hover {
//         color: white;
//         background-color: #FFCAA1;
//         border: 1px solid #FFCAA1;
//     }
// `;
