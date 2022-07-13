import React from 'react'

export const SliderApp = () => {
  return (
      <>
    <div>
        <h1>Juegos</h1>
        <br/>
        <section id='slider'>
            <input type="radio" name='slider' id='s1'/>
            <input type="radio" name='slider' id='s2'/>
            <input type="radio" name='slider' id='s3' checked/>
            <input type="radio" name='slider' id='s4'/>
            <input type="radio" name='slider' id='s5'/>

            <label htmlFor="s1" id='slider1'>
                <img src="https://i.blogs.es/5fe30d/fifa-21-intros_1/1366_2000.jpeg" alt="slider image" width="100%" heigth="100%" />
            </label>

            <label htmlFor="s1" id='slider2'>
                <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_CallOfDutyBlackOps2_image1600w.jpg" alt="slider image" width="100%" heigth="100%" />
            </label>

            <label htmlFor="s1" id='slider3'>
                <img src="https://assets.reedpopcdn.com/gta-1621612236056.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/gta-1621612236056.jpg" alt="slider image" width="100%" heigth="100%" />
            </label>

            <label htmlFor="s1" id='slider4'>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gof-of-war-ragnarok-portada-1631262719.jpg" alt="slider image" width="100%" heigth="100%" />
            </label>

            <label htmlFor="s1" id='slider5'>
                <img src="https://media.vandal.net/m/8-2020/2020827173312_1.jpg" alt="slider image" width="100%" heigth="100%" />
            </label>
        </section>    
    </div>

    </>
  )
}
