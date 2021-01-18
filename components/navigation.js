import React, { Component } from 'react';
import Link from 'next/link';
import Sticky from 'react-stickynode';




    
 export default function Navigation (){
    
    return (

      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
 <header className="header_area">
                <nav className='navbar navbar-expand-lg menu_one'>
    <div className="d-flex header align-items-center justify-content-between position-relative">
          
          <div className="d-none d-sm-flex">
            <Link href="/">
              <a href="/" className="nav-bar-option tpnav nav-li-hover mr-4">Home</a>
            </Link>
            <Link href="/commercial">
              <a href="/commercial" className="nav-bar-option tpnav nav-li-hover mr-4">
                Commercial
              </a>
            </Link>
            <Link href="/residential">
              <a href="/residential" className="nav-bar-option tpnav nav-li-hover mr-4">
                Residential
              </a>
            </Link>
            <Link href="/reviews">
              <a href="/reviews" className="nav-bar-option tpnav nav-li-hover mr-4">
                Reviews
              </a>
            </Link>
            <Link href="/getting-started">
              <a href="/getting-started" className="nav-bar-option tpnav nav-li-hover mr-4">How it Works!</a>
            </Link>
            </div>
          </div>


          <div className="d-flex header-login align-items-center justify-content-between position-relative"> 
          <div className="d-none d-sm-flex">
          <div className="login-header ">
          <Link href="/get-a-quote">
              <a href="/get-a-quote" className="nav-bar-option nav-li-hover tpnav mr-4">
                Get A Quote
              </a>
            </Link>
            <Link href="/login">
            <button class="snipcart-customer-signin">Login</button>
            </Link>
          </div>
          </div>
        </div>
        </nav>
        </header>
        </Sticky>

    )

 }




        