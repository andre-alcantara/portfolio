export function getSaoPauloTime() {
  const date = new Date()

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })

  const parts = formatter.formatToParts(date)

  const hours = parts.find(p => p.type === 'hour')!.value
  const minutes = parts.find(p => p.type === 'minute')!.value
  const seconds = parts.find(p => p.type === 'second')!.value

  return `${hours}:${minutes}:${seconds}`
}

export function isDaytime(time: string) {
  const hour = parseInt(time.split(':')[0], 10)
  return hour >= 6 && hour < 18
}
