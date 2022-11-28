import { Primary } from './Button.stories'
import { render, screen } from '@testing-library/react'

describe('button', (): void => {
  test('should render primary button', (): void => {
    const { container } = render(<Primary {...Primary.args} />)
    expect(container).toMatchSnapshot()
  })
})
