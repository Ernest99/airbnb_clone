import React from 'react'
import logo from '../images/Airbnb-Logo.png'
import './nav.css'
import {BiSearch} from 'react-icons/bi'
import {TbWorld} from 'react-icons/tb'
import Detail from './Detail'
const Nav = () => {
  return (
    <>
      <nav>
        <a href="/">
            <img src={logo} className="logo" alt="" />
        </a>
        <div className="navLink">
            <ul>
                <li><a href="/">Anywhere</a></li> <span>|</span>
                <li><a href="/">Any week</a></li><span>|</span>
                <li><a href="/">Add guests</a></li>
                <button><BiSearch className='search'/></button>
            </ul>
        </div>
        <div className="detail">
            <a href="/">Become a Host</a>
            <TbWorld/>
            <Detail/>
        </div>
      </nav>
    </>
  )
}

export default Nav
