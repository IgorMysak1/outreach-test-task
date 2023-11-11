import { Message } from '../../../../types'
import { RowWrapper } from '../../../../components'
import { relationsMessageTypeIcons } from '../../../../constants'
import { daysFromPastDate } from '../../../../utils'
import { MessageDescription } from '../message-description/message-description.tsx'
import { Button } from '../../../../UI'
interface MessageBoxProps extends Message {
  deleteMessage: (id: string) => void
}
export const MessageBox = ({
  id,
  content,
  user,
  type,
  timestamp,
  deleteMessage,
}: MessageBoxProps) => {
  return (
    <RowWrapper icon={relationsMessageTypeIcons[type]} text={`${daysFromPastDate(timestamp)}d`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MessageDescription user={user} type={type} />
          <p>{content}</p>
        </div>
        <Button onClick={() => deleteMessage(id)}>Delete</Button>
      </div>
    </RowWrapper>
  )
}
