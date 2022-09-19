
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import './cart.css'
const Cart = () => {
  return (
    <div className='cart-container'>
       <div className='cart-item'>
        <img className='cart-item-img' src='https://th.bing.com/th/id/OIP.GDWLRnPFSxj9sAe4vqR8vgHaSd?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
        <div className='cart-item-title'>home page for having fun</div>
        <div className='cart-item-price'>30.00</div>
        <div className='cart-item-qty'>
        <IconButton> <AddIcon/></IconButton>
          <span>1</span>
        <IconButton> <RemoveIcon/></IconButton>
        </div>
        <div>Subtotal: 34.0044</div>
       </div>
        <div className='cart-item'>
        <img className='cart-item-img' src='https://th.bing.com/th/id/OIP.GDWLRnPFSxj9sAe4vqR8vgHaSd?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
        <div className='cart-item-title'>home page for having fun</div>
        <div className='cart-item-price'>30.00</div>
        <div className='cart-item-qty'>
        <IconButton> <AddIcon/></IconButton>
          <span>1</span>
        <IconButton> <RemoveIcon/></IconButton>
        </div>
        <div>Subtotal: 34.0044</div>
       </div>
        <div className='cart-item'>
        <img className='cart-item-img' src='https://th.bing.com/th/id/OIP.GDWLRnPFSxj9sAe4vqR8vgHaSd?w=115&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
        <div className='cart-item-title'>home page for having fun</div>
        <div className='cart-item-price'>30.00</div>
        <div className='cart-item-qty'>
        <IconButton> <AddIcon/></IconButton>
          <span>1</span>
        <IconButton> <RemoveIcon/></IconButton>
        </div>
        <div>Subtotal: 34.0044</div>
       </div>
       <h3>Total : 500.50</h3>
    </div>
  )
}

export default Cart