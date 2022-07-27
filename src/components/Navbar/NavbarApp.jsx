import React from 'react'
import Icono from './st.png'


export const NavbarApp = () => {
  return (
      <>
    <div className='primera'>
    <header className='nav center'>
        <img src={Icono} alt="Icono" className='logo' />
        <input type="checkbox" name='' className='checkBtn' />
        <ol className='center'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Games</li></a>
            <a href="#"><li>Shop</li></a>
            <a href="#"><li>About</li></a>
        </ol>
    </header>
    </div>
    </>
  )
}
