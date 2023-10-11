import { render, screen } from '@testing-library/react'
import { Greet } from './greet';
import { text } from 'express';

test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getAllByText('Hello')
    expect(textElement).toBeInTheDocument();

})