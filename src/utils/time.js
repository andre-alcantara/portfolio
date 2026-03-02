export function getSaoPauloTime() {
  const date = new Date().toLocaleString('en-GB', { timeZone: 'America/Sao_Paulo' })
  const time = new Date(date)
  
  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')
  
  return `${hours}:${minutes}:${seconds}`
}

export function isDaytime(time) {
  const hour = parseInt(time.split(':')[0], 10)
  return hour >= 6 && hour < 18
}
