import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

//import ResumePDF from '../../public/static/resume.pdf';

const Navbar = () => {
    // const handleResumeClick = () => {
    //     window.open(ResumePDF, '_blank');
    // };

    return (
        <Nav>
            <Name>Alex Ocegueda Castro</Name>
            <NavLinks className='nav-links'>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Projects</NavLink>
                {/*<ResumeButton onClick={handleResumeClick}>Resume</ResumeButton>*/}
            </NavLinks>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0 1.5rem;

    @media (max-width: 576px) { /*  Med Length */
        margin-left: 1rem;
    }
`;

const Name = styled.p`
    color: #F1BF98;
    font-size: 20px;
    font-weight: bold;
`;

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin-right: 1rem;
    font-weight: 600;
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    color: #717568;
    &:hover {
        color: white;
    }
`;

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
