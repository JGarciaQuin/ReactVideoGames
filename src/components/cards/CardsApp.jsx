import React from 'react'
import Tituloc from './clas.png'
import Sa from './sa.jpg'
import God from './dios.png'
import Crash from './crash.jpg'



export const CardsApp = () => {
  return (
    
    <>
    <div className='todo'>
        <div>
            <center><img src={Tituloc} alt="tituloc" /></center>
        </div>

        <div className='cards-body'>
            <div className='wrapper'>
                <div className='card'>
                    <img src={Sa} alt="Sa" />
                    <div className='info'>
                        <h1>GTA San Andreas</h1>
                        <p>Hace cinco años Carl Johnson huyó de los rigores de la vida en Los Santos, San Andreas, una ciudad destrozada por las bandas, las drogas y la corrupción en la que las estrellas de cine y los millonarios hacen lo posible por evitar a los traficantes y a los pandilleros.</p>
                        <a href="#" className='boton'>Detalles</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={God} alt="God" />
                    <div className='info'>
                        <h1>God Of War</h1>
                        <p>El Dios de la Guerra es el título en manos de un guerrero fuerte digno de poseer un gran poder. El título fue concedido por primera vez por Atenea (diosa de la sabiduría y la guerra justa, protectora de los atenienses) a Kratos por haber derrocado a Ares.</p>
                        <a href="#" className='boton'>Detalles</a>
                    </div>
                </div>

                <div className='card'>
                    <img src={Crash} alt="Crash" />
                    <div className='info'>
                        <h1>Crash</h1>
                        <p>Crash: Guerra al Coco-Maníaco (en inglés Crash: Mind Over Mutant) es un videojuego de plataformas desarrollado por Radical Entertainment y publicado por Activision. Salió a la venta el 14 de octubre de 2008 en Latinoamérica y el 31 de octubre del mismo año en España.</p>
                        <a href="#" className='boton'>Detalles</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}
