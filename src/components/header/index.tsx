import { Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BurgerMenuIcon, DesktopNavbar, DrawerNavbar, HeaderContainer, StyledIconButton } from './HeaderStyles';

const Header = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      (document.getElementById("navbar")as HTMLInputElement).style.top = "0";
    } else {
      (document.getElementById("navbar")as HTMLInputElement).style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }


  //================================================================================================
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
      <ul key={content}>
        <li>
          <button onClick={handleClickNav}>
            <span>{content}</span>
          </button>
        </li>
      </ul>
    );
  }
  return (
    <HeaderContainer>
      <div>
        <StyledIconButton onClick={toggleOpen}>
          <BurgerMenuIcon />
        </StyledIconButton>
        <DrawerNavbar anchor="top" open={open} onClose={toggleOpen}>
          {navLinks.map((nav) => renderNavLink(nav))}
        </DrawerNavbar>
        <DesktopNavbar>
          {navLinks.map((nav) => renderNavLink(nav))}
        </DesktopNavbar>
      </div>
    </HeaderContainer>
  )
}

export default Header