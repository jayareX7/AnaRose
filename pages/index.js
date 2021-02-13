import React from 'react';
import Head from 'next/head';
import Intro from '../components/intro';
import { CMS_NAME } from '../lib/constants';
import Container from '../components/container'
import IndexHero from '../components/home-header';
import Stservice from '../components/home-features';
import Erpanalytics from '../components/home-analytics';
import Featuresitems from '../components/features-items';
import Footer from '../components/Footer';





export default function Index() {
  
  return (

  <>
 <IndexHero></IndexHero>
         


<Erpanalytics />
<Intro />
<div className="flex-col  flex items-center md:justify-between mt-16 mb-16 md:mb-12"> <a href="/#" className="er_btn video-btn er_btn_two">Get Started Today!</a> 
            <style jsx>{" .video-btn { position: relative;} {z-index:999;}"}
                </style></div>
             


        
        <section >
        <div className = "video-header">
            <img src="assets/home-banner.png" alt=""/>
       
            </div>
               
             
            </section>



<Container>
  
<section className="process_area sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src='assets/home4/divider.png' alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Get Started" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Choose A Service"  descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Choose Add-Ons"
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Confirm Booking" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_5.png" iImg="icon_05.png" ftitle="Confirm Booking" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
                                
                           
            </section>

 <div className=" seo_banner_content col-md-12 text-center">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                        </div>
                            <div className='text-center'>
                            <a href="/" className="about_btn">Get A Free Estimate</a>
                            </div>
                    
            
           
</Container>

 
                </>
);



}