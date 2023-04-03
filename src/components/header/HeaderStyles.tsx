import styled from '@emotion/styled';
import { Drawer, IconButton } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HeaderContainer = styled('div')({
  backdropFilter: 'blur(4px)',
  background: 'transparent',
  color: "#e6f1ff",
  padding: "33px",
  position: "fixed",
  height: "1rem",
  zIndex: 100,
});

export const HeaderDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DesktopNavbar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

export const DrawerNavbar = styled(Drawer)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'transparent',
  color: 'black',
});

//--------------------------------------

export const BurgerMenuIcon = styled(GiHamburgerMenu)({
  color: '#fff',
  fontSize: '2rem',
});

export const StyledIconButton = styled(IconButton)({
  '@media (max-width: 768px)': {
    display: 'block',
  },
  display: 'none',
});

//--------------------------------------

export const StyledUl = styled('ul')({
  listStyle: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});

export const StyledLi = styled('li')({
  listStyle: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});

//--------------------------------------