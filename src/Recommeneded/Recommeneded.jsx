import React from 'react'
import './Recommeneded.css'
import Button from '../components/Button'

function Recommeneded({handleClick}) {
  return <>
  <div>
    <h3 className='Recommeneded-title'>Recommeneded</h3>
    <div className="Recommeneded-flex">
      <Button onClickHandler={handleClick} value='' title='All Products'/>
      <Button onClickHandler={handleClick} value='Nike' title='Nike'/>
      <Button onClickHandler={handleClick} value='Adidas' title='Adidas'/>
      <Button onClickHandler={handleClick} value='Puma' title='Puma'/>
      <Button onClickHandler={handleClick} value='Vans' title='Vans'/>
    </div>
  </div>
  </>
}

export default Recommeneded