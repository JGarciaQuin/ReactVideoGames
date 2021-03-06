import React from 'react'
import '../cards/cards.css'
import Black from '../assets/black.jpg'



export const CardsApp = (props) => {
  return (
    
    <>
    <div className='todo'>
        <div className='cards-body'>
            <div className='wrapper'>
                <div className='card'>
                    <img src={Black} alt="Black" />
                    <div className='info'>
                        <h1>{props.tituloP}</h1>
                        <p>{props.texto}</p>
                        <a href="#" className='boton'>Detalles</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}
