import React from 'react';
import Head from 'next/head';
import Intro from '../components/intro';
import { CMS_NAME } from '../lib/constants';
import Container from '../components/container'
import IndexHero from '../components/home-header';
import Erpanalytics from '../components/home-analytics';
import Footer from '../components/Footer';





export default function Index() {
  
  return (

  <>

<div className="flex-col  flex items-center md:justify-between mt-16 mb-16 md:mb-12"> <a href="/#" className="er_btn video-btn er_btn_two">Get Started Today!</a> 
            <style jsx>{" .video-btn { position: relative;} {z-index:999;}"}
                </style></div>
             




        
        <section >
                <video autoPlay loop muted src="assets/home1/AnaRose-Hero.mp4" className= "video-header" alt="">
                   <style jsx>{" .video-header { position: absolute; width: -webkit-fill-available; padding-bottom: 2rem; z-index: -9999}    {top: 0;}"}
                </style>
                </video>  
             
            </section>
        
      
    </>
   
);


}
