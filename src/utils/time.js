export function getSaoPauloTime() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  })
}
