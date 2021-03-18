import React, { Component } from 'react';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import Container  from './container';
import NavigationMenu from './navigationmenu'




    
 export default function Navigation (){
    
    return (
      
      <>
    


<div style={{backgroundColor: '#84AC7E', height: 2.5 + 'rem'}}> 
<Container>

  <div className='mt_0 flex' style={{float: 'right'}}>

        <div className="text-center account-tab"><a href="">Sign-Up</a> </div> <div className="account-tab-span">|</div>  <div className="text-center account-tab"> <a href="">My Account</a> </div>
   </div>
   </Container>
   
    </div>
  

<Container><img src="assets/main-logo.png" style={{ width: 25 + '%', margin: '50px auto 0'}} /></Container>

      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">

 <header className="header_area">
                <nav className='navbar navbar-expand-lg menu_one'>
    <div className="d-flex header align-items-center justify-content-between position-relative " style={{width: 100 + '%'}}>
   
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
