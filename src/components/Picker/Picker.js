import React, { useState } from 'react'
import './Picker.css'

const Picker = () => {
    const [color, setColor] = useState('linear-gradient(90deg, rgba(140,175,46,1) 0%, rgba(46,46,203,1) 52%, rgba(166,221,18,1) 100%)')
    

  return (
    <div className='colorPicker' style={{background: color}}>
        <div className='picker'>
            <h1>Color picker</h1>
            <div className='d-flex justify-content-around'>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='inputColor' />
                <input type="text" value={color === 'linear-gradient(90deg, rgba(140,175,46,1) 0%, rgba(46,46,203,1) 52%, rgba(166,221,18,1) 100%)' ?  '' : color} onChange={(e) => setColor(e.target.value)} className='inputText' />
            </div>
        </div>
    </div>
  )
}

export default Picker