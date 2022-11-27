import React from 'react'
import './button.scss'

export enum ButtonType {
  Primary,
  Secondary,
}

interface IButton {
  label: string
  onClick?: () => void
  buttonType: ButtonType
  Icon: JSX.Element
}

const Button = ({ label, onClick, buttonType, Icon }: IButton) => {
  return (
    <button
      className={`n-button${Icon ? ' with-icon' : ''} ${
        ButtonType[buttonType ? buttonType : ButtonType.Primary]
      }`}
      onClick={onClick}
    >
      {Icon && Icon}
      {label}
    </button>
  )
}

export default Button
