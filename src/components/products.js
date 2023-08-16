import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/products-slice';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slices/cart-slice';
import { addToWishList } from '../redux/slices/wish-slice';
export default function Products() {

    const [allProducts, setAllProducts] = useState([]); 
    const [categories, setCategories]  = useState([]);

    const getAllProducts = ()=>{
        fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> setAllProducts(data));
    }
    const getCategories = ()=>{
        fetch("https://fakestoreapi.com/products/categories").then((res)=> res.json()).then((data)=> setCategories(data));
    }

    const getCategory = (cat)=>{
        console.log(cat);
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(data=>setAllProducts(data))
    }
    
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(fetchProducts()) ;
        getCategories();
        getAllProducts(); 
    }, [dispatch])
            return (
            <div className='products'>
                <div className='categories'>
                    <button onClick={()=>getAllProducts()}>All Products</button>
                    <button onClick={()=> getCategory(categories[0])}>{categories[0]}</button>
                    <button onClick={()=> getCategory(categories[1])}>{categories[1]}</button>
                    <button onClick={()=> getCategory(categories[2])}>{categories[2]}</button>
                    <button onClick={()=> getCategory(categories[3])}>{categories[3]}</button>
                </div>

                <div className='container'>
                    <div className='products-wrapper '>
                        {allProducts.map((product)=>{
                            return(
                                <div className=" box " key={product.id}>
                                    <div className="icons">
                                        <Link onClick={()=> dispatch(addToCart(product))} href="" className="fa fa-shopping-cart"></Link>
                                        <Link onClick={()=> dispatch(addToWishList(product))} href="" className="fa fa-heart"></Link>
                                        <Link to={`/products/${product.id}`} href="" className="fa fa-eye"></Link>
                                    </div>
                                    <div className="image">
                                        <img src={product.image} alt=""></img>
                                    </div>
                                    <div className="content">
                                        <h4>{product.title.substring(0, 30)}</h4>
                                        <div className="price">${product.price} <span>$20</span></div>                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

