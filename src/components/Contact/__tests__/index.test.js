// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from './Contact'

afterEach(cleanup)

describe('Contact component renders', () => {
  it('renders', () => {
  render(<Contact />);
});

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})


it('h1 has text content', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})
 
it('button has text', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})