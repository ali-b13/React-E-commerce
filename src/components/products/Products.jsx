import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import './products.css'
const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then((res)=>setProducts(res.data))
  },[])
  console.log(products)
  const dispatch=useDispatch()
  return (
    <div className='container'>
      {
        products?.map((product,index)=>{
          return (
            <div className='card' key={product.id}> 
             <img className='card-img' src={product.image}></img>
              <div className='card-title'>{product.title}</div>
               <div className='card-price'>{product.price}</div>
               <button className='btn-add-to-cart'>Add to Cart</button>
            </div>
          )
        })
      }
    </div>

  )
}

export default Products