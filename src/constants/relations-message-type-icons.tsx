import { MessageType } from '../types'
import { BeerIcon } from '../assets/icons/beer.tsx'
import { CoffeeIcon } from '../assets/icons/coffee.tsx'
import { NotesIcon } from '../assets/icons/notes.tsx'
import { UserIcon } from '../assets/icons/user.tsx'
import { PhoneIcon } from '../assets/icons/phone.tsx'

export const relationsMessageTypeIcons = {
  [MessageType.BEER]: <BeerIcon />,
  [MessageType.COFFEE]: <CoffeeIcon />,
  [MessageType.MEETING_NOTE]: <NotesIcon />,
  [MessageType.MESSAGE]: <UserIcon />,
  [MessageType.PHONE]: <PhoneIcon />,
}
