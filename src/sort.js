import React, {useEffect, useState} from 'react'
import El from './el'

export default function Canvas() {
  const [quant, setQuant] = useState([4]);
  
  useEffect(() => {
    console.log('sosi xyu')
  })
  
 
  
  return (
    <div>
      <form>
        <input type="number" id="quantity"/>
        <button type="submit">Нарисовать</button>
      </form>
      <El quant = {quant}/>
    </div>
  )
}