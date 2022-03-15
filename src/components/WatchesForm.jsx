import React from 'react'

export default function WatchesForm({clock, inputName, inputTimeZone, handleAddClock}) {
  return (
    <form className='form'>
      <div className='input-name'>
        <label htmlFor="name">Название</label>
        <input type="text" name="name" value={clock.name} onChange={inputName}/>
      </div>
      <div className='input-timezone'>
        <label htmlFor="timezone">Временная зона</label>
        <input type="number" name="timezone" value={clock.time} onChange={inputTimeZone}/>
      </div>
      <button className='form-btn' type='button' onClick={handleAddClock}>Добавить</button>
    </form>
  )
}
