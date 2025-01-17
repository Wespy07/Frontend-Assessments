import React from 'react'

function Header() {
  return (
    <nav>
      <p>10:10</p>
      <img className='main-logo' src="./logo.png" />
      <div className='nav-right'>
        <img src="./cell.png" />
        <img src="./wifi.png" />
        <img src="./batt.png" />
      </div>
    </nav>
  )
}

export default Header