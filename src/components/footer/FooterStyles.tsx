import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const FooterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
});

export const FooterLabel = styled('h1')({
  fontSize: '1rem',
  fontWeight: '400',
  color: 'white',
});

export const LinkButton = styled('a')({
  color: 'white',
  marginLeft: '10px',
  marginTop: '6px',
});