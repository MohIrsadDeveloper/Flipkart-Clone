import React from 'react'
import { Link } from 'react-router-dom'

import '../../Style/Menu.css'


const Menu = () => {
  return (
    <>
      <div className="container-fluid menu-c1">
        <div className="row menu-r1">
          <div className="offset-1 col-10">
            <ul className='d-flex justify-content-evenly'>
              <Link className='link' to={'/'}>
                <li>Electronics</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>TVs &amp; Appliances</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Men</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Women</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Baby &amp; Kids</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Home &amp; Furniture</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Sports, Books &amp; More</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Flight </li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Offer Zone</li>
              </Link>
              <Link className='link' to={'/'} >
                <li>Grocery</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu