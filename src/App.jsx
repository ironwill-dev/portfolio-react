import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/theme"
import HeroSection from "./components/HeroSection"
import Section from "./components/Section"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SocialLinks from "./components/SocialLinks"
import ContactForm from "./components/ContactForm"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>
        <HeroSection id="hero">
          <Hero />
        </HeroSection>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="about">
          <About />
          <SocialLinks />
        </Section>
          
        <Section id="contact">
          <ContactForm />  
        </Section>

      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
