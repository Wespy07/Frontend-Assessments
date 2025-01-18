import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <nav>
      <Link to="/">
        <img className='main-logo' src="./logo.png" />
      </Link>
    </nav>
  )
}

export default Header