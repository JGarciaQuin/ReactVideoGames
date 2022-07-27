import React from 'react'
import Titulo from './titulo1.png'
import img1 from './pv.jpg'



export const TextApp = () => {
  return (
      <>
    <div className='todo'>
    <div>
        <center><img src={Titulo} alt="Titulo" /></center>
    </div>

    <div className='contenedortext'>
        <img width="20%" height="" src={img1} alt="img1" />
        <div className='txt'>
            <h3>El primer videojuego</h3>
            <p>Durante bastante tiempo ha sido complicado señalar cual fue el primer videojuego, principalmente debido a las múltiples definiciones de este que se han ido estableciendo,
                 pero se puede considerar como primer videojuego el Nought and crosses, también llamado OXO, desarrollado por Alexander S.Douglas en 1952. El juego era una versión computerizada del tres en raya 
                 que se ejecutaba sobre la EDSAC y permitía enfrentar a un jugador humano contra la máquina.</p>
        </div>
    </div>
    </div>
    </>
  )
}