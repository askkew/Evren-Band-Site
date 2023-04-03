import styled from '@emotion/styled';
import { Drawer, IconButton } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HeaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
});

export const DesktopNavbar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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