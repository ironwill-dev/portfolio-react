import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.body};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.5;
    }

    h1, h2, P {
        font-family: ${({ theme }) => theme.fonts.heading};
        text-align: center;

    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
