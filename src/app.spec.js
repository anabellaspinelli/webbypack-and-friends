import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

let getByTestId

beforeEach(() => {
  getByTestId = render(<App />).getByTestId
})

test('Renders without error', () => {
  expect(getByTestId('count')).toHaveTextContent('0')
})

test('Increments value after clicking + button', () => {
  fireEvent.click(getByTestId('Plus'))
  expect(getByTestId('count')).toHaveTextContent('1')
})

test('Increments value after clicking + button', () => {
  fireEvent.click(getByTestId('Minus'))
  expect(getByTestId('count')).toHaveTextContent('-1')
})
