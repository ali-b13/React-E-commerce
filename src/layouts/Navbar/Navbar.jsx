import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { ShoppingCartSharp,MoreVert } from '@material-ui/icons';
import { IconButton ,Badge} from '@material-ui/core';
import { useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const logo="https://th.bing.com/th/id/R.04c9affecfa54094af8ea2d53618ed91?rik=7Qczvq3XpD3G2Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f_XDq8Uy7n9VI%2fTSYBkp9fadI%2fAAAAAAAAAfA%2fzIyKZYh2EJk%2fs1600%2fwordwordword.png&ehk=SAvgjFCEkaZR9pH6MxwkF48O946CCbrm%2bbaPdOJqrIA%3d&risl=&pid=ImgRaw&r=0"
const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const ToggledIcon=()=>{
    return(
      <>
      {toggle?<ClearRoundedIcon/>:<MoreVert/> }
      </>
    )
  }
  return (
    <div className='nav-container'>
     <div className='nav-logo'><Link to={'/'}><img src={logo}/></Link></div>
     <div className='nav-list'>
      <Link className='link active' to={'/about'}>Home</Link>
      <Link className='link' to={'/about'}>Your Orders</Link>
      <Link className='link' to={'/about'}>About</Link>
     </div>
    <div className='mobile-cart-showMore'> <div className='nav-cart'><Link to={'/cart'}><IconButton><Badge  badgeContent={2} color='error'><ShoppingCartSharp /></Badge></IconButton></Link></div>
     <div className='show-icon-mobile'><IconButton onClick={()=>setToggle(prev=>!prev)}>< ToggledIcon/></IconButton></div></div>
     <div className='menu-options'style={{'display':toggle?'block':'none'}}>
      <ul>
        <li>one</li>
        <li>one</li>
        <li>one</li>
        <li>one</li>
        <li>one</li>
        <li>one</li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar