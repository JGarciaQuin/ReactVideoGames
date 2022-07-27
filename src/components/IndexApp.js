import React from 'react'
import CardsApp from 'Cards/CardsApp';
import Black from '../assets/black.jpg';
import Pes from '../assets/Pes.jpg';
import Mdh from '../assets/mdh.jpg';





 const CardsApp = (props) => {
  return (
    <>
    <div className='todo'>
        <div>
            <center><img src={Tituloc} alt="tituloc" /></center>
        </div>

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

export default CardsApp
