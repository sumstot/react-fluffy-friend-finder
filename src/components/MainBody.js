import React from "react"
import dog1 from "../assets/dog1.jpeg"
import dog2 from "../assets/dog2.jpeg"
import dog3 from "../assets/dog3.jpeg"
import dog4 from "../assets/dog4.jpeg"
import dog5 from "../assets/dog5.jpeg"
import dog6 from "../assets/dog6.jpeg"
import dog7 from "../assets/dog7.jpeg"
import dog8 from "../assets/dog8.jpeg"
import dog9 from "../assets/dog9.jpeg"

export default function MainBody() {
  return(
    <div>
      <section className='dog-container'>
        <img src={dog1} alt='a cute dog' className='dogs'/>
        <img src={dog2} alt='a cute dog' className='dogs'/>
        <img src={dog3} alt='a cute dog' className='dogs'/>
        <img src={dog4} alt='a cute dog' className='dogs'/>
        <img src={dog5} alt='a cute dog' className='dogs'/>
      </section>
      <div className='dog-container dog-container2'>
        <img src={dog1} alt='a cute dog' className='dogs'/>
        <img src={dog2} alt='a cute dog' className='dogs'/>
        <img src={dog3} alt='a cute dog' className='dogs'/>
        <img src={dog4} alt='a cute dog' className='dogs'/>
        <img src={dog5} alt='a cute dog' className='dogs'/>
      </div>
      <div>
        <h2>Find you fluffy friend today!</h2>
      </div>
    </div>

  )
}
