import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const cart = useSelector((state)=> state.cart); 
  const wish = useSelector((state)=> state.wish); 
  

  return (
    <nav className='navbar'>
        <div className='container'>
          
          <header className='header-1'>
              <Link className='brand'  to ='/'>Selim</Link>

            <div className='nav-cart'>
              <div className='cart'>
                <Link className='cart-icon' to='/cart'><AiOutlineShoppingCart /></Link> 
                <span className='cart-num'> {cart.length}</span>
              </div>
                <Link className='wishList'  to='/wish' ><AiOutlineHeart /></Link>
                <span className='wish-num'> {wish.length}</span>
            </div>  

          </header>

          <header className='header-2'>
            <ul className='navbar-links'>
              <li className='nav-item'><Link className='nav-link'  to ='/'>Home</Link></li>
              <li className='nav-item'><Link className='nav-link'  to ='/products'>Shop</Link></li>
              <li className='nav-item'><Link className='nav-link'  >Find Store</Link></li>
              <li className='nav-item'><Link className='nav-link'  to ='/contact'>Meet US</Link></li>
            </ul>
              <form className='search-form'>
                <input type='text' placeholder='what are you looking for '></input>
                <button className='search-icon' > <CiSearch /></button>
              </form>
          </header>
          </div>
    </nav>

  )
}
