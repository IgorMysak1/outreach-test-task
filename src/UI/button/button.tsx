import React from 'react'
import styles from './button.module.css'

type ButtonProps = React.ComponentProps<'button'>
export const Button = ({ children, className, ...rest }: ButtonProps) => (
  <button className={`${styles.button} ${className}`} {...rest}>
    {children}
  </button>
)
