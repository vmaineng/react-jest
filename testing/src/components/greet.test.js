

test('Greet renders Hello correctly', () => {
    const str = 'Hello'
    expect(str).toContain('Hello');
});



//RTL

// import { render, screen } from '@testing-library/react'
// import { Greet } from './greet';

// test('Greet renders correctly', () => {
//     render(<Greet />)
//     const textElement = screen.getByText('Hello')
//     expect(textElement).toBeInTheDocument(); 

// })