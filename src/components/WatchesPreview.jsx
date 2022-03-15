import React, { useEffect, useState } from 'react'

export default function WatchesPreview({name, timeZone, handleRemove, id}) {
  const [time, setTime] = useState({
    date: getTimeZone(timeZone)
  })

  function getTimeZone(number) {
    const curTz = (new Date().getTimezoneOffset()) * 60 * 1000
    const tz = ((number) * 60 * 60 * 1000) + curTz
    const mSeconds = new Date().getTime() + tz;
    return new Date(mSeconds).toLocaleTimeString();
  }

  function timeOut() {
    return setTimeout(() => setTime({
      date: getTimeZone(timeZone)
    }))
  }

  useEffect(() => {
    const interval = timeOut()
    return () => clearTimeout(interval)
  })

  return (
    <div className='watches'>
      <div className='wathes-head'>
        <h5 className='title'>{name}</h5>
        <span className='clock-remove' onClick={() => handleRemove(id)}></span>
      </div>
      <div className='clock'>
        {time.date}
      </div>
    </div>
  )
}
