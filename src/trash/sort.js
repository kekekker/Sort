import React, {useEffect, useState, useRef} from 'react'

export default function Canvas() {
  const [quant, setQuant] = useState(0);
  const [val, setVal] = useState("");
  const inputRef = useRef()

  useEffect(() => {
    return () => {
      console.log("yasosbibu")
    }
  }, [quant])

 

  return (
    <div>
        <input 
        type="number" 
        id="quantity"
        ref = {inputRef}
        />
        <button onClick = {() => {setQuant(inputRef.current.value); inputRef.current.value = ""}}>
        Нарисовать
        </button>
        <button>
        Сортировать
        </button>
        {<El quant = {quant}/>}
    </div>
  )
}