import React from 'react'
import { ContactButton, ContactCard, ContactContainer, ContactForm, ContactInput, ContactInputMessage, ContactTitle } from './ContactStyles'

const Contact = () => {
  return (
    <section id="Contact">
      <ContactContainer>
        <ContactCard>
          <ContactTitle>Contact us!</ContactTitle>
          <ContactForm>
            <ContactInput placeholder="Name" />
            <ContactInput placeholder="Email" />
            <ContactInputMessage placeholder="Message"/>
            <ContactButton>Send</ContactButton>
          </ContactForm>
        </ContactCard>
      </ContactContainer>
    </section>
  )
}

export default Contact