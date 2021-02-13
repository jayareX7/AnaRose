import React, { Component } from 'react';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import Container from '../components/container'




    
 export default function Navigation (){
    
    return (
      
      <>
    
<div className="row">
<div style={{display: 'flex '}}>
    <a  href="htttp://facebook.com">< img src="assets/facebook.png" style={{ margin: "0 0.4rem 0 0.4rem", width: 2 + '%'}} /> </a>
     <a href="htttp://instagram.com"><img src="assets/instagram.png" style={{ margin:  "0 0.4rem 0 0.4rem" , width: 2 + '%'}} /> </a>
    <a href="htttp://twitter.com" ><img src="assets/twitter.png"  style={{ margin:  "0 0.4rem 0 0.4rem", width: 2 + '%'}} /> </a>
  </div>
</div>



<img src="assets/main-logo.png" style={{paddingBottom: 0.4 + 'rem', width: 10 + '%', margin: '0 auto'}} />

      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">

 <header className="header_area">
                <nav className='navbar navbar-expand-lg menu_one'>
    <div className="d-flex header align-items-center justify-content-between position-relative " style={{width: 100 + '%'}}>
   
          <div className="d-none margin-auto d-sm-flex">
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
            <Link href="/get-a-quote">
              <a href="/get-a-quote" className="nav-bar-option nav-li-hover tpnav mr-4">
                Get A Quote
              </a>
            </Link>
            
           
        
            </div>
          </div>


         
        </nav>
        </header>
        </Sticky>
</>
    )

 }




        