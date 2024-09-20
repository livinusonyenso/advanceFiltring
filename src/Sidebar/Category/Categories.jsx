import React from 'react'
import './Categories.css'
import Input from '../../components/Input'

function Categories({handleChange}) {
  return (

<div >
<h2 className='sidebar-title'>Category</h2>

<label className='sidebar-lable-container'>
  <input onChange={handleChange} type="radio" value="" name='test' />
  <span className='checkmark'></span>All
</label>
<Input handleChange={handleChange} value='sneakers' title='Sneakers' name="test"/>
<Input handleChange={handleChange} value='flats' title='Flats' name="test"/>
<Input handleChange={handleChange} value='sandals' title='Sandls' name="test"/>
<Input handleChange={handleChange} value='heels' title='Heels' name="test"/>
</div>

  )
}

export default Categories