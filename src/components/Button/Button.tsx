import './button.scss'

export enum ButtonType {
  Primary,
  Secondary,
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
      {label}
    </button>
  )
}

export default Button
