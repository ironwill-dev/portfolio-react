import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from '../components/Navbar';
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

// describe('Navbar Component (Integration)', () => {
//     test('clicking about link scrolls to the about section', () => {
//         window.HTMLElement.prototype.scrollIntoView = vi.fn();
//         render(
//             <ThemeProvider theme={theme}>
//                 <Navbar />
//                 <div id="about" data-testid="about">About Section</div>
//             </ThemeProvider>
//         )

//         // const and click hamburger icon
//         const hamburger = screen.getByTestId('hamburger-button');
//         fireEvent.click(hamburger);

//         // expect to see the menu
//         expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

//         // const aboutLink and click it
//         const mobileMenu = screen.getByTestId('mobile-menu');
//         const aboutLink = within(mobileMenu).getByText('About');
//         fireEvent.click(aboutLink);

//         // expect a mock scroll function to have been called
//         expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
//     })
// })

// describe('Navbar Component (Unit Test)', () => {
//     test('clicking hamburger toggles the mobile-menu', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <Navbar />
//             </ThemeProvider>
//         )
//         // grab the hamburger button
//         const button = screen.queryByTestId('hamburger-button');

//         // the mobile-menu should NOT be visible
//         expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

//         // click the hamburger - the menu IS be visible
//         fireEvent.click(button);
//         expect(screen.queryByTestId('mobile-menu')).toBeInTheDocument();
        
//         // click the hamburger - the menu should NOT be visible
//         fireEvent.click(button);
//         expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
//     })
// })

// describe('Navbar Component (Unit Test)', () => {
//     test('clicking the hamburger toggles between FaTimes and FaBars icon', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <Navbar />
//             </ThemeProvider>
//         )
//         // grab the hamburger-button
//         const button = screen.queryByTestId('hamburger-button');

//         // fatimes should NOT be visible & hamburger IS visible
//         expect(screen.queryByTestId('times-icon')).not.toBeInTheDocument();
//         expect(screen.queryByTestId('bars-icon')).toBeInTheDocument();

//         //click hamburger - fatimes IS visible & hamburger should NOT be visible
//         fireEvent.click(button);
//         expect(screen.queryByTestId('times-icon')).toBeInTheDocument();
//         expect(screen.queryByTestId('bars-icon')).not.toBeInTheDocument();
//     })
// })