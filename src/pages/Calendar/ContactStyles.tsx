import styled from "@emotion/styled";

export const CalendarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  padding: 10,
  width: '650px',
  height: '650px',
  color: 'white',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})