import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <Nav>
            <Name>Alex Ocegueda Castro</Name>
            <NavLinks className='nav-links'>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Projects</NavLink>
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
    color: rgb(100, 119, 178);
    font-size: 20px;
    font-weight: bold;
`;

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin-right: 1rem;
    list-style: none;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #555;
    }
`;
