import React from 'react'
import { Link } from 'react-router-dom';
import Latest from '../components/latest';
import Magazine from '../components/magazine';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
            <div className='home'>
          <div className='container'>

                    <p className='title-1'>Sale is on!</p>
                    <h1 className='title-2'>Up to 70% off</h1>
                    <h3>In store and online</h3>
                    <Link className='shop' to='/products'>Shop Now</Link>
          </div>

    </div>
                <Latest />
            <Magazine />
            <Footer />
    </>




  )
}
