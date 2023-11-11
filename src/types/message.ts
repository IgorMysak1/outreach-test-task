import { User } from './user.ts'
export interface Message {
  id: string
  content: string
  user: User
  timestamp: Date
  type: MessageType
}
export enum MessageType {
  MESSAGE = 'message',
  PHONE = 'phone',
  COFFEE = 'coffee',
  BEER = 'beer',
  MEETING_NOTE = 'meeting note',
}
