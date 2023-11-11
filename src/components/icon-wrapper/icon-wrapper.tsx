import React, { PropsWithChildren } from 'react'
import styles from './icon-wrapper.module.css'
interface IconWrapperProps extends React.ComponentProps<'span'> {
  active?: boolean
}
export const IconWrapper = ({
  children,
  active,
  ...props
}: PropsWithChildren<IconWrapperProps>) => {
  return (
    <span className={`${styles.iconWrapper} ${active ? styles.active : ''}`} {...props}>
      {children}
    </span>
  )
}
