import React from 'react'
import { FooterContainer, FooterLabel, LinkButton } from './FooterStyles'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLabel>Designed and Developed by Lucas Overbey</FooterLabel>
      <LinkButton href="https://lucasoverbey.dev/" >
        <FaExternalLinkSquareAlt fontSize="20px"/>
      </LinkButton>
    </FooterContainer>
  )
}

export default Footer