import { nanoid } from "nanoid";
import React, {useState} from "react";
import WatchesForm from "./components/WatchesForm";
import WatchesPreview from "./components/WatchesPreview";

export default function App() {
  const [clock, setClock] = useState([])
  const [value, setValue] = useState({
    name: '',
    time: ''
  })

  function handleRemove(id) {
    setClock((prevClock) => ([...prevClock].filter((el) => el.id !== id)))
  }
  function inputName(ev) {
    setValue((prevValue) => ({...prevValue, name: ev.target.value}))
  }
  function inputTimeZone(ev) {
    setValue((prevValue) => ({...prevValue, time: ev.target.value}))
  }
  function handleAddClock() {
    setClock((prevClock) => ([...prevClock, {
      name: value.name,
      time: value.time,
      id: nanoid()
    }]))
    setValue({
      name: '',
      time: ''
    })
  }
  return (
    <>
      <WatchesForm
        clock={value}
        inputName={inputName}
        inputTimeZone={inputTimeZone}
        handleAddClock={handleAddClock}/>
      <div className="watches-list">
        {clock.map((el) => 
        <WatchesPreview
          name={el.name}
          timeZone={el.time}
          handleRemove={handleRemove}
          id={el.id}
          key={el.id}/>
        )}
      </div>
    </>
  );
}
