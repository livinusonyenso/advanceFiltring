import React from 'react'
import './Sidebar.css'
import Category from './Category/Categories'
import Colors from './Color/Colors'
import Prices from './Price/Prices'

export default function Sidebar({handleChange}) {
  return <>
  <section className='sidebar'>
  <div className='logo-container'>
  <h1>🛒</h1>
    
  </div>
 
 <Category handleChange={handleChange} />
 <Prices handleChange={handleChange} />
 <Colors handleChange={handleChange} />
   </section>
   </>
 
}
