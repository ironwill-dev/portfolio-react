import {render, screen, fireEvent} from '@testing-library/react'
import ContactForm from '../components/ContactForm.jsx'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

describe('ContactForm Component (Unit Test)', () => {
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

describe('ContactForm Component (Integration Test)', () => {
    test('submits the form and shows thank you message', () => {
        render(
            <ThemeProvider theme={theme}>
                <ContactForm />
            </ThemeProvider>
        )

        const nameInput = screen.getByPlaceholderText('Enter your name here...')
        const messageInput = screen.getByPlaceholderText('Enter a fun message here...')

        fireEvent.change(nameInput, {target: {value: 'Will'}})
        fireEvent.change(messageInput, {target: {value: 'This is a test !'}})

        const button = screen.getByText('Send Message !')
        fireEvent.click(button)

        const thankYou = screen.getByText('Thank you Will, your message has been sent !')
        expect(thankYou).toBeInTheDocument()
    })
})