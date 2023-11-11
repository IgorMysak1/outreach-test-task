import { PropsWithChildren } from 'react'
import styles from './row-wrapper.module.css'
import { IconWrapper } from '../icon-wrapper/icon-wrapper.tsx'

interface RowWrapperProps {
  icon: React.ReactNode
  text?: string
}

export const RowWrapper = ({ icon, text = '', children }: PropsWithChildren<RowWrapperProps>) => {
  return (
    <div className={styles.rowWrapper}>
      <div className={styles.timeLabelIconWrapper}>
        <span className={styles.text}>{text}</span>
        <IconWrapper>{icon}</IconWrapper>
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  )
}
