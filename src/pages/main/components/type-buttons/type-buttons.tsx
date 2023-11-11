import { IconWrapper } from '../../../../components'
import { MessageType } from '../../../../types'
import styles from './type-buttons.module.css'
import { relationsMessageTypeIcons } from '../../../../constants'

interface TypeButtonsProps {
  type: MessageType
  changeType: (type: MessageType) => void
}

export const TypeButtons = ({ type, changeType }: TypeButtonsProps) => {
  return (
    <div className={styles.actions}>
      {Object.values(MessageType).map(mType => (
        <IconWrapper key={mType} active={type === mType} onClick={() => changeType(mType)}>
          {relationsMessageTypeIcons[mType]}
        </IconWrapper>
      ))}
    </div>
  )
}
