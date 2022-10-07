import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import './detail.css'
const Detail = () => {
  return (
    <div>
      <div className="detailMenu">
        <AiOutlineMenu className='menu'/>
        <FaUserCircle className='user'/>
      </div>
    </div>
  )
}

export default Detail
