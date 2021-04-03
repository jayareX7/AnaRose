import React, { Component } from 'react';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import NavigationTop from './navigationTop'
import NavigationMenu from './navigationmenu'




    
 export default function Navigation (){
    
    return (
      
      <>
    


     
     
      <Sticky top={0} innerZ={10} activeClass="navbar_fixed">

 <header className="header_area">
                <nav className='navbar navbar-expand-lg menu_one'>
    <div className="d-flex header align-items-center justify-content-between position-relative" style={{width: 100 + '%'}}>
   
          <div className="margin-auto d-sm-flex" style={{display:'none'}}>
            <Link href="/">
              <a href="/" className="nav-bar-option bison-bold tpnav nav-li-hover mr-4">Home</a>
            </Link>
            <Link href="/commercial">
              <a href="/commercial" className="nav-bar-option bison-bold tpnav nav-li-hover mr-4">
                Commercial
              </a>
            </Link>
            <Link href="/residential">
              <a href="/residential" className="nav-bar-option bison-bold  tpnav nav-li-hover mr-4">
                Residential
              </a>
            </Link>
            <Link href="/reviews">
              <a href="/reviews" className="nav-bar-option bison-bold  tpnav nav-li-hover mr-4">
                Reviews
              </a>
            </Link>
            <Link href="/get-a-quote">
              <a href="/get-a-quote" className="nav-bar-option bison-bold nav-li-hover tpnav mr-4">
                Get A Quote
              </a>
            </Link>

         
            
           
            </div>
          
          </div>
          
        </nav>
        <div className="collapsible-menu">
          <NavigationMenu /> </div>
        </header>
      
        </Sticky>
</>
    )

 }
