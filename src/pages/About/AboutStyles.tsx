import styled from '@emotion/styled';
import { AiFillPlayCircle, AiFillBackward, AiFillForward } from 'react-icons/ai'

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
  fontSize: '22px',
});

export const MusicPlayer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '500px',
  height: '200px',
  backgroundColor: 'black',
  color: 'white',
  marginBottom: '20px',
});

export const TempMusicLine = styled('span')({
  borderTop: '2px solid #fff',
  width: '80%',
  height: '1px',
  display: 'block',
  margin: '10px',
})

export const MusicButtons = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledBackButton = styled(AiFillBackward)({
  fontSize: '50px',
  cursor: 'pointer',
  color: 'white',
});

export const StyledPlayButton = styled(AiFillPlayCircle)({
  fontSize: '60px',
  cursor: 'pointer',
  color: 'white',
});

export const StyledForwardButton = styled(AiFillForward)({
  fontSize: '50px',
  cursor: 'pointer',
  color: 'white',
});