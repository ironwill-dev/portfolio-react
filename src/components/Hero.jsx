import React from 'react'
import styled from 'styled-components'
import HeroSection from './HeroSection';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: ${({theme}) => theme.spacing.lg};
  background-color: ${({theme}) => theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: ${({theme}) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: ${({theme}) => theme.spacing.lg};
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-family: ${({theme}) => theme.fonts.heading};
  margin-bottom: ${({theme}) => theme.spacing.xs};
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${({theme}) => theme.spacing.xl};
`;

const CTAButton = styled.button`
  padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
  background-color: ${({theme}) => theme.colors.primaryAlt || '#00385eff'};
  color: ${({theme}) => theme.colors.textInv};
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: ${({theme}) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px dodgerblue;
  };

  &:active {
    transform: scale(1.1);
  };
`;

const ImageContainer = styled.div`
  padding-top: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PlaceholderImage = styled.img`
  width: 55%;
  height: 55%;
  border-radius: ${({theme}) => theme.borderRadius};
  box-shadow: 0 0 10px black;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Span = styled.span`
  background: linear-gradient(to top, black, cornflowerblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
     section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <TextContent>
          <Heading>I am <Span>Christian Williams</Span> Front-End Software Developer</Heading>
          <Subheading>Relentless, Innovative Developer committed to creating captivating and visually alluring UI, as well as smooth and intuative UX</Subheading>
          <CTAButton onClick={() => scrollToSection('projects')}>Check Out My Projects !</CTAButton>
        </TextContent>

        <ImageContainer>
          <PlaceholderImage src='/prof-pic.png' alt='Profile Pic' />
        </ImageContainer>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
