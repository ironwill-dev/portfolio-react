<!--

Notes:

npm install styled-components

npm install --save-dev @types/styled-components

...

npm install react-icons

import {FaBar, FaTimes, FaGithub, FaYoutube, FaLinkedin, FaUser, FaEnvelope} from 'react-icons/fa'

...

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

package.json >>>
    "scripts": {
        "test": "vitest"
    }

vitest.config.js >>>
    test: {
        environment: jsdom,
        globals: true,
        setupFiles: './src/setupTests.js',
    }

src/setupTests.js >>>
    import "@testing-library/jest-dom"

...

Unit Test

ContactForm.text.jsx >>>
    import {render, screen, fireEvent} from '@testing-library/react'
    import ContactForm from '../components/ContactForm.jsx'
    import { ThemeProvider } from 'styled-components';
    import theme from '../styles/theme';

    describe('ContactForm Component', () => {
        test('renders the send message button', () => {
            render(
                <ThemeProvider theme={theme}>
                    <ContactForm />
                </ThemeProvider>
            );

            const button = screen.getByText('Send Message !');

            expect(button).toBeInTheDocument();
        })
    })

...

Integration Test
ContactForm.text.jsx >>>
    import {render, screen, fireEvent} from '@testing-library/react'
    import ContactForm from '../components/ContactForm.jsx'

    describe("ContactForm Component (Integration Test)", () => {
        test("submits the form and shows thank you message", () => {

            render(<ContactForm />);

            const nameInput = screen.getByPlaceholderText("Your Name");
            const messageInput = screen.getByPlaceholderText("Your Message");

            fireEvent.change(nameInput, { target: { value: "Will" } });
            fireEvent.change(messageInput, { target: { value: "This is a test!" } });

            const button = screen.getByText("Send Message !");
            fireEvent.click(button);

            const thankYou = screen.getByText("Thank you Will, your message has been sent!");
            expect(thankYou).toBeInTheDocument();
  });
});

...

E2E Cypress Test

npx cypress open ORRRRR npx cypress run

cypress/e2e/contactForm.cy.js >>>
    describe("E2E Test", () => {
        it("allows a user to send a message successfully", () => {
            cy.visit("http://localhost:5173");

            cy.contains("Contact Me").scrollIntoView();

            cy.get('input[placeholder="Enter your name here..."]').type("Will");
            cy.get('textarea[placeholder="Enter a fun message here..."]').type("This is an E2E test !");

            cy.contains("Send Message !").click();

            cy.on("window:alert", (text) => {
            expect(text).to.contains("Thank you Will, your message has been sent !");
        });
    });
});


...

-->
