import './button.scss'

export enum ButtonType {
  Primary,
  Secondary,
  IconRound,
  IconRoundSecondary,
  Alternate,
}

interface IButton {
  buttonType: ButtonType
  label?: string
  onClick?: () => void
  Icon?: JSX.Element
  customClassName?: string
}

const Button = ({
  label,
  onClick,
  buttonType,
  Icon,
  customClassName,
}: IButton) => {
  const getIconClassName = (): '' | ' with-icon' => {
    return Icon ? ' with-icon' : ''
  }

  const getLabelClassName = (): '' | ' with-label' => {
    return label ? ' with-label' : ''
  }

  const getPrimaryClassName = (): string => {
    return ButtonType[buttonType ? buttonType : ButtonType.Primary]
  }

  const getCustomClassName = (): string => {
    return customClassName ? ` ${customClassName}` : ''
  }

  return (
    <button
      className={`n-button${getIconClassName()}${getLabelClassName()}${getCustomClassName()} ${getPrimaryClassName()}`}
      onClick={onClick}
    >
      {Icon && Icon}
      {label && <span>{label}</span>}
    </button>
  )
}

export default Button
