import { render } from '@testing-library/react'
import { FooterDefault } from './Footer.stories'

describe('Footer constructor', () => {
  test('should render default footer', () => {})
  const { container } = render(<FooterDefault />)
  expect(container).toMatchSnapshot()
})
