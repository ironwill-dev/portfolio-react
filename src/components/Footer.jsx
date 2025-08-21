import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'

const FooterWrapper = styled.footer`
  background-color: ${({theme}) => theme.colors.secondaryAlt || '#00385eff'};
  color: ${({theme}) => theme.colors.textInv};
  padding: ${({theme}) => theme.spacing.xs};
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: auto;
  box-shadow: 0 -4px 16px gray;
`;

const IconRow = styled.div`
  margin-top: ${({theme}) => theme.spacing.xs};
  display: flex;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.md};
  font-size: 1.2rem;
`;

const IconLink = styled.a`
  color: ${({theme}) => theme.colors.textInv};
  font-size: 1.5rem;

  &:hover {
   color: ${({theme}) => theme.colors.primary};
  }

  &:active {
    transform: scale(1.25);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
        <p>&copy; 2025 Will's Portfolio. All rights reserved.</p>
        <IconRow>
          <IconLink href='https://github.com/ironwill-dev' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </IconLink>

          <IconLink href='https://linkedin.com/in/christian-williams-ironwill' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </IconLink>

          <IconLink href='https://www.youtube.com/@CodingTreeHouse' target='_blank' rel='noopener noreferrer'>
            <FaYoutube />
          </IconLink>
        </IconRow>
    </FooterWrapper>
  )
}

export default Footer
