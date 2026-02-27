import React from 'react'

export default function ClockLocation() {
    const [rerenderKey, setRerenderKey] = React.useState(`${Math.random()}`)
    const timerRef = React.useRef()

    const time = React.useMemo(() => {
        const formatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            timeZone: 'America/Sao_Paulo',
        }
        return new Intl.DateTimeFormat([], formatOptions).format(new Date())
    }, [rerenderKey])

    React.useEffect(() => {
        const timer = setInterval(() => {
            setRerenderKey(`${Math.random()}`)
        }, 1000)
        timerRef.current = timer
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="hour">
            <span>São Paulo</span>
            <span>–</span>
            <span>{time}</span>
        </div>
    )
}
