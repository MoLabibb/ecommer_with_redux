import React, { useEffect, useState } from 'react'
import {FaRegStar , FaStar} from 'react-icons/fa'
import { addToCart } from '../redux/slices/cart-slice'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Product() {
  const dispatch = useDispatch();
  const api_url = "http://localhost:9000/products" ; 
  const [product, setProduct] = useState({}); 
  let param =  useParams();
  useEffect(()=>{
    fetch(`${api_url}/${param.id}`).then((res)=> res.json()).then((product)=> setProduct(product));
  }, [param.id])
  return (
    <div className='product-container'>
        <div className='container'>
          <div className='product-image'>
            <img alt='' src={product.image}></img>
          </div>
          <div className='product-details'>
            <h6 className='product-title'>{product.title}</h6>
            <ul className='rate'>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaRegStar /></i>
                <i><FaRegStar /></i>
            </ul>
            <strong className='price'>${product.price}</strong>
            <p className='desc'>{product.description}</p>
            <button onClick={()=> dispatch(addToCart(product))}  className='addcart'>Add To Cart</button>
          </div>
        </div>
    </div>
  )
}
