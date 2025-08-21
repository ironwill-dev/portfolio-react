import React from 'react'
import styled from 'styled-components'

const ProjectGrid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({theme}) => theme.spacing.lg};
`;

const ProjectCard = styled.div`
    background-color: ${({theme}) => theme.colors.backgroundAlt || '#464646ff'};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 0 10px black;
    text-align: center;
    transition: transform .6s ease, box-shadow .6s ease;

    &:hover {
        transform: translateY(-10px) scale(1.1);
        box-shadow: 0 0 50px black;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

const ProjectImage = styled.img`
    background-color: lightgray;
    height: 180px;
    width: 100%;
    border-radius: ${({theme}) => theme.borderRadius};
    margin-bottom: ${({theme}) => theme.spacing.sm};
`;

const ProjectTitle = styled.h3`
    margin-bottom: ${({theme}) => theme.spacing.xs};
    color: ${({theme}) => theme.colors.textInv};
`;

const ProjectDescription = styled.p`
    font-size: 0.9rem;
    color: ${({theme}) => theme.colors.textInv};
`;

const Span = styled.span`
  background: linear-gradient(to top, black, cornflowerblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Projects = () => {
  return (
    <>
        <h2><Span>My Projects</Span></h2>
        <ProjectGrid>
            <ProjectCard>
                <ProjectImage src='/proj1.png' alt='Project 1' />
                <ProjectTitle>Full-Stack Task Manager Application</ProjectTitle>
                <ProjectDescription>HTML, CSS, JS, React, Express.js, Node.js, MongoDB</ProjectDescription>
            </ProjectCard>

            <ProjectCard>
                <ProjectImage src='/proj2.png' alt='Project 2' />
                <ProjectTitle>Front-End Random Quote Generator</ProjectTitle>
                <ProjectDescription>HTML, CSS, JS, React, API, Axios, Media-CSS</ProjectDescription>
            </ProjectCard>

            <ProjectCard>
                <ProjectImage src='/proj3.png' alt='Project 3' />
                <ProjectTitle>Front-End Financial Revenue Dashboard</ProjectTitle>
                <ProjectDescription>HTML, CSS, JS, React, Recharts, Cypress, E2E</ProjectDescription>
            </ProjectCard>

            <ProjectCard>
                <ProjectImage src='/proj4.png' alt='Project 4' />
                <ProjectTitle>Front-End Calculator Web Application</ProjectTitle>
                <ProjectDescription>HTML, CSS, JS, Calculate(), Try/Catch</ProjectDescription>
            </ProjectCard>
        </ProjectGrid>
    </>
  )
}

export default Projects
