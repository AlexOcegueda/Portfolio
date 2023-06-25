import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
    <div>
        {
        <>
            <Nav>
                <Name>Alex Ocegueda Castro</Name>
                <NavLinks>
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
`;

const Name = styled.p`
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
`;