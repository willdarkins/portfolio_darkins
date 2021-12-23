import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline to verify that the component is rendering
    it('renders', () => {
        render(<Navbar />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Navbar />);
        expect(asFragment()).toMatchSnapshot();});
})