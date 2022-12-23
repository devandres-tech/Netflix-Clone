import {
  Primary,
  Secondary,
  IconRound,
  PrimaryWithIcon,
  SecondaryWithIcon,
  Alternate,
  IconRoundSecondary,
  PrimaryWithCustomClass,
} from './Button.stories'
import { render } from '@testing-library/react'

describe('Button constructor', (): void => {
  test('should render primary button', (): void => {
    const { container } = render(<Primary {...Primary.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render primary button with icon', (): void => {
    const { container } = render(<PrimaryWithIcon {...PrimaryWithIcon.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render secondary button', (): void => {
    const { container } = render(<Secondary {...Secondary.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render secondary button with icon', (): void => {
    const { container } = render(
      <SecondaryWithIcon {...SecondaryWithIcon.args} />
    )
    expect(container).toMatchSnapshot()
  })

  test('should render icon round button', (): void => {
    const { container } = render(<IconRound {...IconRound.args} />)
    expect(container).toMatchSnapshot()
  })

  test('should render secondary icon round button', (): void => {
    const { container } = render(
      <IconRoundSecondary {...IconRoundSecondary.args} />
    )
    expect(container).toMatchSnapshot()
  })

  test('should render alternate button', (): void => {
    const { container } = render(<Alternate {...Alternate.args} />)
    expect(container).toMatchSnapshot()
  })
  test('should render custom css class name', (): void => {
    const { container } = render(<Primary {...PrimaryWithCustomClass.args} />)
    expect(container).toMatchSnapshot()
  })
})
