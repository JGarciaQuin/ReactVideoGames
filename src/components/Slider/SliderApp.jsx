import React from 'react'
import Image from './titulo2.png'
import Gtav from './gtav.jpg'
import Fifa from './fifa.jpg'
import Fornite from './fornite.jpg'

export const SliderApp = () => {
  return (
      <>
    <div className='todo'> 
    <div className='container'>
       <div className='row'>
          <div col s12>
            <center><img src={Image} alt="" /></center>
          </div>
       </div>

       <ul className='slider'>
          <li id='slide1'>
            <img src={Gtav} alt="Gtav" />
          </li>

          <li id='slide1'>
            <img src={Fifa} alt="Fifa" />
          </li>

          <li id='slide1'>
            <img src={Fornite} alt="Fornite" />
          </li>
       </ul>

       <ul className='menuu'>
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
          </li>
          <li>
            <a href="#slide3">3</a>
          </li>
       </ul>
    </div>
    </div>
    

    </>
  )
}
