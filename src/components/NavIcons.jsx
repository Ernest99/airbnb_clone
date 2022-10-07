import React from 'react'
import { data_1 } from '../data'
import './nav.css'
const NavIcons = () => {
  return (
    <div>
      <div className="nav_icon">
        {
            data_1.map((({id,icon,title})=>{
                return(
                    <div className="icon" key={id}>
                        <a href="/">{icon}</a>
                        <h5>{title}</h5>
                    </div>
                )
            }))
        }
      </div>
    </div>
  )
}

export default NavIcons
