import React from 'react'
import {GiCancel} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { delFromWishList } from '../redux/slices/wish-slice';
import { addToCart } from '../redux/slices/cart-slice';
export default function Wish() {
    const wish = useSelector((state=> state.wish));
    const dispatch = useDispatch(); 
  return (
    <div className='cart-container'>
                    <div className='products-wrapper '>
                        {wish.map((product)=>{
                            return(
                            <div className='product-card' key={product.id}>
                                <div className='image'>
                                    <img alt='' src={product.image}></img>
                                </div>

                                <div className='title'>{product.title.substring(0, 35)}</div>
                                <div className='price'>${product.price}</div>                            
                                <button onClick={()=> dispatch(addToCart(product))}  className='wish-btn'>Add To Cart</button>
                                <i onClick={()=> dispatch(delFromWishList(product))}  className='remove-cart btn btn-outline-dark m-2'>{<GiCancel />}</i>
                            </div>
    
                            )
                        })}
                    </div>
    </div>
  )
}
