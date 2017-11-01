export const getDaysNumber = (now = new Date()) => {
  return new Date(now.getFullYear(), now.getMonth(),0).getDate()
}

export const getDaysOffset = (now = new Date()) => {
  return new Date(now.getFullYear(), now.getMonth()).getDay()
}

