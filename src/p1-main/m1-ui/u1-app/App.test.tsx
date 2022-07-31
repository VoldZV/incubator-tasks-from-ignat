import React from 'react'
import {render} from '@testing-library/react'
import App from './App'

test('find text "react homeworks"', () => {
    const {getByText} = render(<App/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const linkElement = getByText(/react homeworks/i)
    expect(linkElement).toBeInTheDocument()
})
