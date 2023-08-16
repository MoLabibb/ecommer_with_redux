import React from 'react'
import {GiCancel} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import {  addToCart, delFromCart, removeItem } from '../redux/slices/cart-slice';

export default function Cart() {
    const cart = useSelector((state=> state.cart));
    const dispatch = useDispatch(); 
    const totalPrice   = cart.reduce((acc, product)=>{
            acc += product.price * product.qty; 
            return acc; 
    }, 0)
  return (
    <div className='cart-container'>

                    <div className='products-wrapper '>
                        {cart.map((product)=>{
                            return(
                            <div className='product-card' key={product.id}>
                                <div className='image'>
                                    <img alt='' src={product.image}></img>
                                </div>

                                <div className='title'>{product.title.substring(0, 35)}</div>
                                <div className='price'>${product.price}</div>
                                <div className='qty'>
                                    <button onClick={()=> dispatch(addToCart(product))} className='qty-num'>+</button>
                                    <button className='num'>{product.qty}</button>
                                    <button onClick={()=> dispatch(removeItem(product))} className='qty-num'>-</button>
                                </div>                                

                                <i onClick={()=> dispatch(delFromCart(product))}  className='remove-cart btn btn-outline-dark m-2'>{<GiCancel />}</i>
                            </div>
    
                            )
                        })}
                    </div>
                    
                    <div className='cart-details'>
                        <h5 className='total-price'>Cart total<span>{Math.floor(totalPrice)}</span>$</h5>
                        <p>Shipping & taxses calculated at checcked </p>
                        <div className='checkbox'>
                            <input type='checkbox'></input>
                            <label>i agree with terms & conditions </label>
                        </div>
                        <div className='checkout'>Checkout</div>
                    </div>
    </div>
  )
}
