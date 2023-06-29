import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
    <div>
        {
        <>
            <Nav>
                <Name>Alex Ocegueda Castro</Name>
                <NavLinks className='nav-links'>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    <Link>Resume</Link>
                    <Link>Contact</Link>
                </NavLinks>
            </Nav>
        </>
        }
    </div>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 30px;
`;

const Name = styled.p`
    color: rgb(100,119,178);
    font-size: 20px;
    font-weight: bold;
`;

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
`;

const Link = styled.li` 
    margin-right: 10px;
    list-style: none;
    cursor: pointer;
`;