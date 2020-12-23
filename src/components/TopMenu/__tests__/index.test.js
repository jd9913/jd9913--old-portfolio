import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopMenu from '..';

afterEach(cleanup);

describe('Nav component', ()=>{
    it('renders', ()=>{
        render(<TopMenu/>);
    });

    it('matches snapshot', ()=>{
        const { asFragment } = render(<TopMenu/>);
        expect (asFragment()).toMatchSnapshot();
    })

  
})


describe('emoji is visible', ()=>{
    it('inserts emoji into the h2', ()=>{
        const { getByLabelText }=render(<TopMenu/>);
        expect(getByLabelText('sparkles')).toHaveTextContent('✨')
    })

});

describe('links are visible', ()=>{
    it('inserts text into the links', ()=>{
        const { getByTestId }=render(<TopMenu/>);
        expect(getByTestId('link')).toHaveTextContent('Jennifer!');
        expect(getByTestId('about')).toHaveTextContent('About Me');


    });
})