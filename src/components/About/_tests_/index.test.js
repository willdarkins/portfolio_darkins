import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensures that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
// baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    })
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})
