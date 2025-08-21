import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {FaUser, FaEnvelope} from 'react-icons/fa'

const FormWrapper = styled.div`
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing.md};
    margin-top: 2rem;
    background-color: ${({theme}) => theme.colors.backgroundAlt || '#464646ff'};
    color: ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 0 10px black;
`;

const FieldGroup = styled.div`
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: ${({theme}) => theme.spacing.md};
    color: ${({theme}) => theme.colors.textInv};
`;

const Input = styled.input`
    width: 92%;
    padding: ${({theme}) => theme.spacing.sm};
    border: 1px solid gray;
    border-radius: ${({theme}) => theme.borderRadius};
`;

const Textarea = styled.textarea`
    width: 92%;
    padding: ${({theme}) => theme.spacing.sm};
    border: 1px solid gray;
    border-radius: ${({theme}) => theme.borderRadius};
    resize: vertical;
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.md};
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    border-radius: ${({theme}) => theme.borderRadius};
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    border: none;

    &:hover {
        box-shadow: 0 0 10px cornflowerblue;
    }

    &:active {
        transform: scale(1.1);
    }
`;

const ErrorMessage = styled.p`
    color: rgb(255, 65, 65);
    font-weight: bold;
    margin-top: ${({theme}) => theme.spacing.lg};
    text-align: center;
`;

const SuccessMessage = styled.p`
    color: lime;
    font-weight: bold;
    margin-top: ${({theme}) => theme.spacing.lg};
    text-align: center;
`;

const Span = styled.span`
  background: linear-gradient(to top, black, cornflowerblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name.trim() === '' || message.trim() === '') {
            setError(true);
            setSuccess(false);

            setTimeout(() => {
                setError(false);
            }, 3500)
            return;
        }

        setError(false);
        setSuccess(true);

        const mailtoLink = `mailto:williamsthejust@gmail.com?subject=${encodeURIComponent(
            `Message from ${name}`
        )}&body=${encodeURIComponent(message)}`;

        setTimeout(() => {
            setSuccess(false);
            window.location.href = mailtoLink;
            setName('');
            setMessage('');
        }, 3000)
    };

    return (
        <>
            <h2><Span>Contact Me</Span></h2>
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Label htmlFor='name'>Your Name:</Label>
                        <Input id='name' value={name} placeholder='Enter your name here...' onChange={(e) => setName(e.target.value)}/> <FaUser />
                    </FieldGroup>

                    <FieldGroup>
                        <Label htmlFor='message'>Your Message:</Label>
                        <Textarea id='message' value={message} placeholder='Enter a fun message here...' rows='5' onChange={(e) => setMessage(e.target.value)}/> <FaEnvelope />
                    </FieldGroup>

                    <Button type='submit'>Send Message !</Button>
                    {error && <ErrorMessage>Please enter both your name and message.</ErrorMessage>}
                    {success && <SuccessMessage>Thank you {name}, your message has been sent !</SuccessMessage>}
                </form>
            </FormWrapper>
        </>
    )
}

export default ContactForm
