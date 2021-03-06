import React, {Component} from 'react';
import AlaCarte from '../components/a-la-carte';
import Toggle from '../components/toggle';
import SectionSeparator from '../components/section-separator'
import Footer from '../components/footer'
import Navigation from '../components/navigation.js';
import NavigationTop from '../components/navigationTop'


export default function Quote() {
  
    return (
  
    <>
<NavigationTop /> 
<img src="assets/main-logo.png" className="main-logo" />
<Navigation />

<Toggle />

<SectionSeparator />

<AlaCarte />

<Footer />

</>
)
}
