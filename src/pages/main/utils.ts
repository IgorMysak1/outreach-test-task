import { Message, MessageType } from '../../types'
import { getUniqId } from '../../utils'
import { hardCodeCurrentUser } from '../../constants'

export const createAMessage = (content: string, type: MessageType): Message => ({
  id: getUniqId(),
  timestamp: new Date(),
  user: hardCodeCurrentUser,
  content,
  type,
})
