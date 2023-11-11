import { useState } from 'react'
import { FormMessage, MessageBox } from './components'
import { hardCodedMessages } from '../../constants'
import { Message } from '../../types'
import styles from './main.module.css'
import { RowWrapper } from '../../components'
import { EmptyFileIcon } from '../../assets/icons/empty-file.tsx'

export const Main = () => {
  const [messages, setMessages] = useState<Message[]>(hardCodedMessages)

  const deleteMessage = (id: string) => {
    const newMessages = messages.filter(message => message.id !== id)
    setMessages(newMessages)
  }

  return (
    <div className={styles.wrapper}>
      <FormMessage messages={messages} changeMessages={setMessages} />
      <div className={styles.line} />
      {messages.length ? (
        <div className={styles.messagesWrapper}>
          {messages.map(message => (
            <MessageBox key={message.id} deleteMessage={deleteMessage} {...message} />
          ))}
        </div>
      ) : (
        <RowWrapper icon={<EmptyFileIcon />}>There is no messages</RowWrapper>
      )}
    </div>
  )
}
