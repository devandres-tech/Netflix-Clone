import './button.scss'

export enum ButtonType {
  Primary,
  Secondary,
  IconRound,
  IconRoundSecondary,
  Alternate,
}

interface IButton {
  label?: string
  onClick?: () => void
  buttonType: ButtonType
  Icon?: JSX.Element
}

const Button = ({ label, onClick, buttonType, Icon }: IButton) => {
  const getIconClassName = (): '' | ' with-icon' => {
    return Icon ? ' with-icon' : ''
  }

  const getLabelClassName = (): '' | ' with-label' => {
    return label ? ' with-label' : ''
  }

  const getPrimaryClassName = (): string => {
    return ButtonType[buttonType ? buttonType : ButtonType.Primary]
  }

  return (
    <button
      className={`n-button${getIconClassName()}${getLabelClassName()} ${getPrimaryClassName()}`}
      onClick={onClick}
    >
      {Icon && Icon}
      {label && <span>{label}</span>}
    </button>
  )
}

export default Button
