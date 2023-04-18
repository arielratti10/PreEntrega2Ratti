import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda online Club Morón</h1>

        <nav>
            <ul>
                <li>Basquet</li>
                <li>Voley</li>
                <li>Tenis</li>
                <li>Fútbol</li>
                <li>Gimnasia</li>
                <li>Institucional</li>
            </ul>
        </nav>

        <CartWidget/>
      
    </header>
  )
}

export default NavBar
