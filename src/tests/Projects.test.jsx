import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "../components/Projects";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { describe, test, vi } from "vitest";

// describe('Projects Component (Integration Test)', () => {
//     test('testing hover preview upon scroll', () => {
//         const func1 = vi.fn();
//         const func2 = vi.fn();

//         render(
//             <ThemeProvider theme={theme}>
//                 <Projects func1={func1} func2={func2} />
//             </ThemeProvider>
//         );

//         const card1 = screen.getByTestId('project-c1');
//         const card2 = screen.getByTestId('project-c2');

//         fireEvent.mouseEnter(card1);
//         expect(func1).toHaveBeenCalled();
//         expect(func2).not.toHaveBeenCalled();
//     })
// })

// describe('Counter Component (Integration Test)', () => {
//     test('testing the change in text should a button be pressed', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <Counter />
//             </ThemeProvider>
//         )
//         const Button1 = screen.getByTestId('like-btn')
//         const Button2 = screen.getByTestId('dislike-btn')

//         fireEvent.click(Button1)
//         fireEvent.click(Button1)
//         fireEvent.click(Button1)
//         expect(screen.getByText('Like: 3')).toBeInTheDocument()

//         fireEvent.click(Button2)
//         fireEvent.click(Button2)
//         expect('Dislike: 2').toBeInTheDocument()
//     })
// })

// describe('Projects Component (Integration Test)', () => {
//     test('testing the count of two buttons', () => {
//         const btn1 = vi.fn()
//         const btn2 = vi.fn()

//         render(
//             <ThemeProvider theme={theme}>
//                 <button onClick={btn1} data-testid='like-btn'>Like</button>
//                 <button onClick={btn2} data-testid='dislike-btn'>Dislike</button>
//             </ThemeProvider>
//         )
//         const Button1 = screen.getByTestId('like-btn')
//         const Button2 = screen.getByTestId('dislike-btn')

//         fireEvent.click(Button1)
//         fireEvent.click(Button1)
//         fireEvent.click(Button1)
//         fireEvent.click(Button2)
//         fireEvent.click(Button2)

//         expect(btn1).toHaveBeenCalledTimes(3)
//         expect(btn2).toHaveBeenCalledTimes(2)
//     })
// })

// describe('Projects Component (Integration Test)', () => {
//     test('clicking a card increases a count for each card', () => {
//         const click1 = vi.fn()
//         const click2 = vi.fn()
//         const click3 = vi.fn()

//         render(
//             <ThemeProvider theme={theme}>
//                 <div onClick={click1} data-testid='project-c1'>Card 1</div>
//                 <div onClick={click2} data-testid='project-c2'>Card 2</div>
//                 <div onClick={click3} data-testid='project-c3'>Card 3</div>
//             </ThemeProvider>
//         )
//         const card1 = screen.getByTestId('project-c1')
//         const card2 = screen.getByTestId('project-c2')
//         const card3 = screen.getByTestId('project-c3')

//         fireEvent.click(card1)
//         fireEvent.click(card1)
//         fireEvent.click(card2)
//         fireEvent.click(card3)
//         fireEvent.click(card3)
//         fireEvent.click(card3)
        
//         expect(card1).toHaveBeenCalledTimes(2)
//         expect(card2).toHaveBeenCalledTimes(1)
//         expect(card3).toHaveBeenCalledTimes(3)
//     })
// })

// describe('Projects Component (Integration Test)', () => {
//     test('clicking each project card triggers a unique callback', () => {
//         const click1 = vi.fn()
//         const click2 = vi.fn()
//         const click3 = vi.fn()
//         const click4 = vi.fn()

//         render(
//             <ThemeProvider theme={theme}>
//                 <div onClick={click1} data-testid='project-c1'>Card 1</div>
//                 <div onClick={click2} data-testid='project-c2'>Card 2</div>
//                 <div onClick={click3} data-testid='project-c3'>Card 3</div>
//                 <div onClick={click4} data-testid='project-c4'>Card 4</div>
//             </ThemeProvider>
//         )

//         const card1 = screen.getByTestId('project-c1');
//         const card2 = screen.getByTestId('project-c2');
//         const card3 = screen.getByTestId('project-c3');
//         const card4 = screen.getByTestId('project-c4');

//         fireEvent.click(card1);
//         expect(click1).toHaveBeenCalled();
//         expect(click2).not.toHaveBeenCalled();
//         expect(click3).not.toHaveBeenCalled();
//         expect(click4).not.toHaveBeenCalled();
//     })
// })

// describe('Projects Component (Integration Test)', () => {
//     test('hovering over one card doesnt affect other cards', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <Projects />
//             </ThemeProvider>
//         )
//         const card1 = screen.getByTestId('project-c1');
//         const card2 = screen.getByTestId('project-c2');
//         const card3 = screen.getByTestId('project-c3');
//         const card4 = screen.getByTestId('project-c4');

//         fireEvent.mouseEnter(card1);

//         expect(card1).not.toHaveStyle('transition: transform .6s ease, box-shadow .6s ease');
//         expect(card2).not.toHaveStyle('transition: transform .6s ease, box-shadow .6s ease');
//         expect(card3).not.toHaveStyle('transition: transform .6s ease, box-shadow .6s ease');
//         expect(card4).not.toHaveStyle('transition: transform .6s ease, box-shadow .6s ease');

//         fireEvent.mouseLeave(card1);
//     })
// })

// describe('Projects Component (Unit Test)', () => {
//     test('hovering one card does not crash and other cards still render', () => {
//         render(
//             <ThemeProvider theme={theme}>
//                 <Projects />
//             </ThemeProvider>
//         );

//         const card1 = screen.getByTestId('project-c1');
//         const card2 = screen.getByTestId('project-c2');
//         const card3 = screen.getByTestId('project-c3');
//         const card4 = screen.getByTestId('project-c4');

//         // Simulate hover on card1
//         fireEvent.mouseEnter(card1);
//         fireEvent.mouseLeave(card1);

//         // Make sure all cards are still present
//         expect(card1).toBeInTheDocument();
//         expect(card2).toBeInTheDocument();
//         expect(card3).toBeInTheDocument();
//         expect(card4).toBeInTheDocument();
//     });
// });
