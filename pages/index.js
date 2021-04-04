import React from 'react';
import Featuresitems from '../components/features-items';
import Index3 from '../components/index-3'
import Index4 from '../components/index-4'
import Index5 from '../components/index-5'
import Footer2 from '../components/footer-2'
import FreeEstimate from '../components/free-estimate';
import Navigation from '../components/navigation.js';
import NavigationTop from '../components/navigationTop'
import Appointment from '../components/appointment';
import Reveal from 'react-reveal'



export default function Index() {
  
  return (

  <>
<NavigationTop /> 
<img src="assets/video_bg.jpg" style={{ margin: ' auto 0'}} />
<Navigation />
         


<div className="container mx-auto">
  
<section className="process_area sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src='assets/home4/divider.png' alt=""/>

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="get-started.jpg" iImg="icon01.png" ftitle="Get Started"
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!" />
                        <div className="agency_featured_content wow fadeInLeft" data-wow-delay="0.6s">
                            <Reveal effect='slideInRight'>
                             <span><button className="snipcart-customer-signin"><i className="ti-arrow-right"></i></button></span>
                            </Reveal>
                        </div>

                        <Featuresitems rowClass="row" aClass="pl_100" fimage="choose-service.jpg" iImg="icon02.png" ftitle="Choose A Service"  descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="agency_featured_content wow fadeInLeft" data-wow-delay="0.6s">
                           <Appointment /> 
                        </div>

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="add-on.jpg" iImg="icon3.png" ftitle="Choose Additional Services"
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="agency_featured_content wow fadeInLeft" data-wow-delay="0.6s">
                            <Reveal effect='slideInRight'>
                             <a href="/get-a-quote"><button className="btn-circle icon mt_30"><i className="ti-arrow-right"></i></button></a> 
                            </Reveal>
                        </div>
                        
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="confirm-booking.jpg" iImg="icon_04.png" ftitle="Confirm Booking" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="agency_featured_content wow fadeInLeft" data-wow-delay="0.6s">
                            <Reveal effect='slideInLeft'>
                            <span> <button className="snipcart-checkout"><i className="ti-arrow-right"></i></button></span>
                            </Reveal>
                        </div>

                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="relax.jpg" iImg="icon_05.png" ftitle="Choose Add-ons" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="agency_featured_content wow fadeInLeft" data-wow-delay="0.6s">
                            <Reveal effect='slideInLeft'>
                             <a href="/shop"><button className="btn-circle icon mt_30"><i className="ti-arrow-right"></i></button></a>  
                            </Reveal>
                        </div>
                        
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div> 
                                
                           
            </section>

<FreeEstimate />
            
           
</div>


<Index3 />


<Index4 />
<Index5 />
<Footer2 />
 
                </>
)



}
