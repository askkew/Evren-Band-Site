import styled from '@emotion/styled';

export const SocialWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '20px',
});

export const CustomButton = styled('button')({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});