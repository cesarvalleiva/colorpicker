import React, { useState } from 'react'
import './Picker.css'

const Picker = () => {
    const [color, setColor] = useState('#000000')
    

  return (
    <div className='colorPicker' style={{background: color}}>
        <div className='picker'>
            <h1>Color picker</h1>
            <div className='d-flex justify-content-around'>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='inputColor' />
                <input type="text" value={color === '#000000' ?  'Seleccione un color' : color} onChange={(e) => setColor(e.target.value)} className='inputText' />
            </div>
        </div>
    </div>
  )
}

export default Picker