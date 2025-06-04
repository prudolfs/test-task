import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import App from '@/App'

describe('App', () => {
  it('should render home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('Welcome to the Test')).toBeInTheDocument()
  })

  it('should render test page', () => {
    render(
      <MemoryRouter initialEntries={['/test/1/1']}>
        <App />
      </MemoryRouter>,
    )
    expect(
      screen.getByText(
        'Which hook is used to manage state in a functional component?',
      ),
    ).toBeInTheDocument()
  })

  it('should render result page', () => {
    render(
      <MemoryRouter initialEntries={['/result/1']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('You have completed the test')).toBeInTheDocument()
  })
})
