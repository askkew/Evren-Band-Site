import { Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BurgerMenuIcon, DesktopNavbar, DrawerNavbar, HeaderContainer, StyledIconButton, StyledLi, StyledUl, HeaderDiv } from './HeaderStyles';
import { CustomButton } from '../../pages/About/AboutStyles';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const navLinks = ["Home", "About", "Calendar", "Contact"];

  const renderNavLink = (content: any) => {

    const scrollToId = `${content.toLowerCase()}`;

    const handleClickNav = () => {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
      <StyledUl key={content}>
        <StyledLi>
          <CustomButton id="custombutton" onClick={handleClickNav}>
            {content}
          </CustomButton>
        </StyledLi>
      </StyledUl>
    );
  }
  return (
    <HeaderDiv>
      <HeaderContainer>
        <StyledIconButton onClick={toggleOpen}>
          <BurgerMenuIcon />
        </StyledIconButton>
        <DrawerNavbar anchor="top" open={open} onClose={toggleOpen}>
          {navLinks.map((nav) => renderNavLink(nav))}
        </DrawerNavbar>
        <DesktopNavbar>
          {navLinks.map((nav) => renderNavLink(nav))}
        </DesktopNavbar>
      </HeaderContainer>
    </HeaderDiv>
  )
}

export default Header