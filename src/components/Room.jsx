import React from 'react'
import './room.css'
import { Images } from '../data'
import {AiFillStar} from 'react-icons/ai'
const Room = () => {
  return (
    <div>
      <div className="cards">
        {
          Images.map((({id,img,loc,date,price,rate})=>{
            return(
              <div className="card" key={id}>
          <img src={img} alt="" />
          <div className="card_flex">
            <h5>{loc}</h5>
            <span><AiFillStar/> {rate}</span>
          </div>
          <p>{date}</p>
          <h4>{price}</h4>
        </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default Room
