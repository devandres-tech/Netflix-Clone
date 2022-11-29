import { Primary, Secondary } from './Button.stories'
import { render } from '@testing-library/react'

describe('Button', (): void => {
  test('should render primary button', (): void => {
    const { container } = render(<Primary {...Primary.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render secondary button', (): void => {
    const { container } = render(<Secondary {...Secondary.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render primary button with icon', (): void => {
    const { container } = render(<Secondary {...Secondary.args} />)
    expect(container).toMatchSnapshot()
  })
})
