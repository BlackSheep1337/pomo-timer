import React from 'react';
import { FooterContainer } from './styles';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <FooterContainer>
      <a href="https://www.linkedin.com/in/dev-alexandre-pereira/" target="_blank"  rel="noreferrer">
        <FaLinkedin />
        <span>https://www.linkedin.com/in/dev-alexandre-pereira/</span>
      </a>
      <a href="https://github.com/Naitwa-Alexandre" target="_blank" rel="noreferrer">
        <FaGithub />
        <span>https://github.com/Naitwa-Alexandre</span>
      </a>
      <p>All credits to &copy; Alexandre Santos Pereira</p>
    </FooterContainer>
  )
}
