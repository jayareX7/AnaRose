import React, { Component } from 'react';
import Link from 'next/link';




    
 export default function Navigation (){
    
    return (
    <div className="d-flex header align-items-center justify-content-between position-relative">
          <div className="d-none mx-xxl-8 d-sm-flex">
            <Link href="/">
              <a href="/" className="nav-bar-option tpnav nav-li-hover mr-4">Home</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="nav-bar-option tpnav nav-li-hover mr-4">
                About AVX
              </a>
            </Link>
            <Link href="/services">
              <a href="/services" className="nav-bar-option tpnav nav-li-hover mr-4">
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a href="/portfolio" className="nav-bar-option tpnav nav-li-hover mr-4">
                Past Works
              </a>
            </Link>
            <Link href="/contact">
              <a href="/contact" className="nav-bar-option nav-li-hover tpnav mr-4">
                Contact
              </a>
            </Link>
          </div>
          
        </div>

    )

 }




        