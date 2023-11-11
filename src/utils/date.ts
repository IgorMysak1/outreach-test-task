export const daysFromPastDate = (date: Date) => {
  const currentDate = new Date()

  const timeDiff = currentDate.getTime() - date.getTime()

  return Math.floor(timeDiff / (1000 * 3600 * 24))
}
