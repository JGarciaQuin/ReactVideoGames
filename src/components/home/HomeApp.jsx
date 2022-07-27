import React from 'react'
import { NavbarApp } from '../Navbar/NavbarApp'
import { SliderApp } from '../Slider/SliderApp'
import { TextApp } from '../Textinfo/TextApp'
import { CardsApp } from '../cards/CardsApp'
import {FooterApp} from '../footer/FooterApp'


export const HomeApp = () => {
  return (
    <>
    <NavbarApp/>
    <SliderApp/>
    <TextApp/>
    <CardsApp tituloP='Black' texto='Jugabilidad. El juego está ambientado en Europa oriental, exactamente en Chechenia. Las misiones están cargadas de enfrentamientos amplios y duraderos con una gran cantidad de enemigos a doblegar, lo que obliga al jugador a enfrascarse en intensos enfrentamientos armados.'/>
    <CardsApp tituloP='Black' texto='Jugabilidad. El juego está ambientado en Europa oriental, exactamente en Chechenia. Las misiones están cargadas de enfrentamientos amplios y duraderos con una gran cantidad de enemigos a doblegar, lo que obliga al jugador a enfrascarse en intensos enfrentamientos armados.'/>
    <FooterApp/>
    </>
  )
}
