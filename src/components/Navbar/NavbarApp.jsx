import React from 'react'
import Icono from './Icono1.png'


export const NavbarApp = () => {
  return (
      <>
    <div>
        <div className="container">
           <div id='mynavbar' className="navbar-container">
                <div className="navbar-logo">
                    <img src={Icono} alt="Icono" />
                </div>
                <div className='navbar'>
                    <div className='items'>
                        <a href="#">Home</a>
                    </div>
                    <div className='items'>
                        <a href="#">Lista</a>
                    </div>
                    <div className='items'>
                        <a href="#">Games</a>
                    </div>
                    <div className='items'>
                        <a href="#">Info</a>
                    </div>
                    <div className='items'>
                        <a href="#">Contacto</a>
                    </div>
                </div>

           </div>  
       </div>
       
           <div className="services-conatiner">

           </div>
    </div>

    </>
  )
}
