import React from 'react'
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <>
   
      <section className="card">
        <img src={img} alt="shoe" className='card-img'/>
      

      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-review">
          {/* <AiFillStar className='rating-star' values={star}/>   */}
          {star}{star}{star}{star}
          <span className='totl-review'>{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className='bag'>
            <BsFillBagHeartFill/>
          </div>
        </section>
      </div>
      </section>
    </>
  )
}
