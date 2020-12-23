// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup, getAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '../../Contact';

afterEach(cleanup)

describe('Contact component renders', () => {
  it('renders', () => {
  render(<ContactForm />);


  const { asFragment } = render(<ContactForm />)
  expect(asFragment()).toMatchSnapshot()
})

})

describe('Contact component has content', ()=>{

it('renders',()=>{
  const { getByTestId } = render(<ContactForm />)
  expect(getByTestId('contactme')).toHaveTextContent('Contact me')
 
  expect(getByTestId('button')).toHaveTextContent('Submit')
  
})

})
  

