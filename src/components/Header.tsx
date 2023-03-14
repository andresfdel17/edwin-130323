import React from 'react'

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className='logo'>
        <h1>AFD</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
