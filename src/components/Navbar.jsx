import React from "react";
import styled from "styled-components";
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from "react";

const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.textInv};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};
    box-shadow: 0 4px 16px gray;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
`;

const Hamburger = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${({theme}) => theme.colors.textInv};
    font-size: 1.4rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: ${({theme}) => theme.spacing.md};
    font-size: 1.25rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.li`
    cursor: pointer;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;

const MobileMenu = styled.ul`
    list-style: none;
    position: absolute;
    top: 32px;
    right: 7px;
    background-color: ${({theme}) => theme.colors.primaryAlt || '#00385eff'};
    width: 15%;
    padding: ${({theme}) => theme.spacing.sm};
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.sm};
    font-size: 1.25rem;

    @media (min-width: 769px) {
        display: none;
    }
`;

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({behavior: 'smooth'});
            setOpenMenu(false);
        }
    }

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu((prev) => !prev)
    }

  return (
    <Nav>
        <Logo>IronWill</Logo>
        <NavLinks>
            <NavLink onClick={() => scrollToSection('hero')}>Hero</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavLinks>

        <Hamburger onClick={toggleMenu}>
            {openMenu ? <FaTimes /> : <FaBars />}
        </Hamburger>

        {openMenu && (
            <MobileMenu>
                <NavLink onClick={() => scrollToSection('hero')}>Hero</NavLink>
                <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
                <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
                <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
            </MobileMenu>
        )}
    </Nav>
  )
}

export default Navbar
