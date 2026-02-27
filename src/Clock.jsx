import { useState, useEffect } from 'react'

function getSaoPauloTime() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  })
}

export default function Clock() {
  const [time, setTime] = useState(getSaoPauloTime)

  useEffect(() => {
    const id = setInterval(() => setTime(getSaoPauloTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return <span>{time}</span>
}
