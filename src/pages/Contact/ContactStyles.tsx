import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const ContactContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const ContactCard = styled("div")({
  width: '500px',
  height: '400px',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
});

export const ContactTitle = styled("h1")({
  fontSize: '2rem',
  fontWeight: '300',
  color: 'white',
});

export const ContactForm = styled("form")({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContactInput = styled(InputBase)({
  width: '100%',
  height: '35px',
  margin: '10px',
  padding: '10px',
  backgroundColor: 'gainsboro',
});

export const ContactInputMessage = styled(ContactInput)({
  height: '70px',
});

export const ContactButton = styled("button")({
  width: '100%',
  height: '35px',
  margin: '10px',
  padding: '10px',
});