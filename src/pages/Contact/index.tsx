import React from 'react'
import { ContactButton, ContactCard, ContactContainer, ContactForm, ContactInput, ContactInputMessage, ContactTitle } from './ContactStyles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const notify = () => {
    toast('Message sent!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <section id="Contact">
      <ContactContainer>
        <ContactCard>
          <ContactTitle>Contact us!</ContactTitle>
          <ContactForm>
            <ContactInput placeholder="Name" />
            <ContactInput placeholder="Email" />
            <ContactInputMessage placeholder="Message"/>
            <ContactButton type="button" onClick={notify}>Send</ContactButton>
          </ContactForm>
        </ContactCard>
      </ContactContainer>
    </section>
  )
}

export default Contact