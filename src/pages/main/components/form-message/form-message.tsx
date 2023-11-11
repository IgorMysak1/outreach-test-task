import { Button, Input } from '../../../../UI'
import React, { useState } from 'react'
import { createAMessage } from '../../utils.ts'
import { Message, MessageType } from '../../../../types'
import styles from './form-message.module.css'
import { hardCodeContactUser } from '../../../../constants'
import { TypeButtons } from '../type-buttons/type-buttons.tsx'
import { RowWrapper } from '../../../../components'
import { LinesIcon } from '../../../../assets/icons/lines.tsx'

interface FormMessageProps {
  messages: Message[]
  changeMessages: (messages: Message[]) => void
}

export const FormMessage = ({ messages, changeMessages }: FormMessageProps) => {
  const [value, setValue] = useState('')
  const [type, setType] = useState<MessageType>(MessageType.MESSAGE)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value) return
    setValue('')
    setType(MessageType.MESSAGE)
    changeMessages([createAMessage(value, type), ...messages])
  }
  return (
    <RowWrapper icon={<LinesIcon />}>
      <form className={styles.formMessage} onSubmit={onSubmit}>
        <Input
          placeholder={`Add a note about ${hardCodeContactUser.firstName} ${hardCodeContactUser.surName}...`}
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <div className={styles.actionsWrapper}>
          <TypeButtons type={type} changeType={type => setType(type)} />
          <Button>Submit</Button>
        </div>
      </form>
    </RowWrapper>
  )
}
