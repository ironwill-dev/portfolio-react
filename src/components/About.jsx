import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  background: linear-gradient(to top, black, cornflowerblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const P = styled.p`
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
`;

const About = () => {
  return (
    <>
        <h2><Span>About Me</Span></h2>
        <P>
            I bring a strong foundation in programming, object-oriented concepts, and software development principles, cultivated through 
            both self-driven education and hands-on experience. While I do not hold a formal computer science degree, I have completed multiple 
            certifications in front-end development, back-end MySQL, UX/UI principles, and advanced React through Coursera and Meta Technology, 
            reflecting formalized learning. Professionally, I served as a Data Systems Administrator in the U.S. Marine Corps, where I was 
            responsible for the accountability, maintenance, and distribution of over $2.1 million worth of various computer systems, and 
            supported an enterprise of over 1,000 users, gaining extensive experience in Linux and Windows environments, cybersecurity, and 
            technical troubleshooting. I also currently hold an active DoD Security Clearance. In my transition to software development, I 
            participated in a competitive OJT Skillbridge internship as a Junior Full-Stack Developer, focusing on front-end and full-stack 
            web application development using JavaScript, TypeScript, HTML/CSS, MongoDB, and Git. Additionally, I have a firm understanding 
            of C++ and Python, developed through years of self-directed projects and coursework. I am a fast learner, highly adaptable, and 
            thrive in both team-based and independent work settings. My combined military discipline, technical foundation, and real-world 
            development experience makes me the motivated developer I am today.
        </P>
    </>
  )
}

export default About
