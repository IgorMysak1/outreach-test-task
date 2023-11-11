import React from 'react'
import styles from './input.module.css'

type InputProps = React.ComponentProps<'input'>
export const Input = ({ className, ...props }: InputProps) => {
  return <input className={`${styles.input} ${className}`} {...props} />
}
