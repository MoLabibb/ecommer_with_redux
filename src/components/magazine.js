import React from 'react'
import m1 from '../images/magazine-1.jpeg'
import m2 from '../images/magazine-2.jpeg'
import m3 from '../images/magazine-3.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai';
export default function Magazine() {
  return (
    <div className='magazine'>
        <h3 className='heading'>Magazine</h3>
        <h6 className='title'>Read <strong>Selim</strong> Magazine </h6>
        <div className='container'>
          <div className='card'>
            <img  src={m1} alt=''></img>
            <p>inside selim</p>
            <h5>innovations to know now </h5>
            <div>
              <p className='story'>Read the Story</p>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className='card'>
            <img src={m2} alt=''></img>
            <p>inside selim</p>
            <h5>calling all change marks </h5>
            <div>
              <p className='story'>Read the Story</p>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className='card'>
            <img className='nolan'  src={m3} alt=''></img>
            <p>inside selim</p>
            <h5>selected by cristofer nolan</h5>
            <div>
              <p className='story'>Read the Story</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

    </div>
  )
}
