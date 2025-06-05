import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from '@/App'

describe('App Rendering', () => {
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

describe('App Navigation', () => {
  it('should show error if name is not provided', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    const submitButton = screen.getByText('Start Test')
    fireEvent.click(submitButton)
    expect(screen.getByText('Error: Name is required')).toBeInTheDocument()
  })

  it('should show error if test is not selected', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    const nameInput = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    const submitButton = screen.getByText('Start Test')
    fireEvent.click(submitButton)
    expect(
      screen.getByText('Error: Selected test is required'),
    ).toBeInTheDocument()
  })

  it('should type name and select test', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    const nameInput = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    const select = screen.getByTestId('select-trigger')
    await user.click(select)
    const option = screen.getAllByText('React Fundamentals')
    await user.click(option[1])
    const submitButton = screen.getByText('Start Test')
    fireEvent.click(submitButton)
    expect(
      screen.getByText(
        'Which hook is used to manage state in a functional component?',
      ),
    ).toBeInTheDocument()
  })

  it('should complete the test', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    const nameInput = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    const select = screen.getByTestId('select-trigger')
    await user.click(select)
    const option = screen.getAllByText('React Fundamentals')
    await user.click(option[1])
    const submitButton = screen.getByText('Start Test')
    fireEvent.click(submitButton)

    let answers = screen.getAllByRole('radio')
    await user.click(answers[2])
    let nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)
    screen.debug()

    answers = screen.getAllByRole('radio')
    await user.click(answers[1])
    nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)

    answers = screen.getAllByRole('radio')
    await user.click(answers[0])
    nextButton = screen.getByText('Finish')
    fireEvent.click(nextButton)

    expect(screen.getByText('Congratulations, John Doe!')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(
      screen.getByText('You have answered 3 out of 3 questions correctly.'),
    ).toBeInTheDocument()
  })
})
