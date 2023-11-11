import { Message, MessageType, User } from '../types'
export const hardCodeCurrentUser: User = {
  firstName: 'You',
  surName: '',
  email: '123@gmail.com',
}
export const hardCodeContactUser: User = {
  firstName: 'Milton',
  surName: 'Romaguera',
  email: '123@gmail.com',
}

export const hardCodedMessages: Message[] = Object.values(MessageType).map((type, index) => ({
  id: index.toString(),
  type,
  user: hardCodeCurrentUser,
  content: `Some text #${index + 1}`,
  timestamp: new Date(2023, 10, 11 - index - 1),
}))
