import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { LiaEthereum } from "react-icons/lia";

const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>CryptoSpace</h1>
            <LiaEthereum color="#fca311"  size={"40"}/>
        </div>
      <ul>
        <li><Link to='/'>Exchanges</Link></li>
        <li><Link to='/coins'>Prices</Link></li>
      </ul>
    </div>
  )
}

export default Header
