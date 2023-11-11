import { PropsWithChildren } from 'react'
import styles from './page-wrapper.module.css'
export const PageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>
}
