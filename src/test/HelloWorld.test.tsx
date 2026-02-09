import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import HelloWorld from '../components/HelloWorld'

describe('HelloWorld component', () => {
  beforeEach(() => {
    render(<HelloWorld name="Alice" />)
  })

  it('renders name correctly', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Hello Alice x1!')
  })

  it('increments count when button clicked', async () => {
    const button = screen.getByRole('button', { name: /increment/i })
    await userEvent.click(button)

    expect(screen.getByRole('heading')).toHaveTextContent('Hello Alice x2!')
  })
})
