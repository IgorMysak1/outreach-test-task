import { hardCodeContactUser } from '../../../../constants'
import { MessageType, User } from '../../../../types'
import styles from './message-description.module.css'
interface MessageDescriptionProps {
  user: User
  type: MessageType
}

export const MessageDescription = ({ user, type }: MessageDescriptionProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.highlightedText}>{`${user.firstName} ${user.surName}`}</span>
      <p>{`had a ${type} with`}</p>
      <span className={styles.highlightedText}>
        {`${hardCodeContactUser.firstName} ${hardCodeContactUser.surName}`}
      </span>
    </div>
  )
}
