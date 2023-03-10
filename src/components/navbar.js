import React from 'react'
import { Avatar } from 'antd'
import NavSecond from './NavSecond'

function Navbar(props) {
  console.log(props)
  return (
    <nav className='navbar' style={{display:'flex', padding:'20px'}}>
        <div className='navimg'>
          <img src='...' alt='logo'/>
        </div>
        <div className='navitems'>
           <NavSecond/>
        </div>
    </nav>
  )
}

export default Navbar