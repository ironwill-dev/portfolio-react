import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'

const IconWrapper = styled.div`
    display: flex;
    gap: ${({theme}) => theme.spacing.md};
    margin-top: ${({theme}) => theme.spacing.lg};
    justify-content: center;
`;

const IconLink = styled.a`
    color: ${({theme}) => theme.colors.text};
    font-size: 1.5rem;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    &:active {
        transform: scale(1.25);
    }
`;

const ResumeButton = styled.a`
    display: inline-block;
    padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.md};
    background-color: ${({theme}) => theme.colors.primaryAlt || '#00385eff'};
    color: ${({theme}) => theme.colors.textInv};
    border-radius: ${({theme}) => theme.borderRadius};
    font-weight: bold;
    text-decoration: none;

    &:hover {
        box-shadow: 0 0 10px dodgerblue;
    }

    &:active {
        transform: scale(1.05);
    }
`;

const SocialLinks = () => {
  return (
    <>
        <IconWrapper>
            <IconLink href='https://github.com/ironwill-dev' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </IconLink>

            <IconLink href='https://linkedin.com/in/christian-williams-ironwill' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </IconLink>

            <IconLink href='https://www.youtube.com/@CodingTreeHouse' target='_blank' rel='noopener noreferrer'>
                <FaYoutube />
            </IconLink>
            
            <ResumeButton href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                View My Resume !
            </ResumeButton>
        </IconWrapper>
    </>
  )
}

export default SocialLinks
