import React from 'react';
import EventDetails from '../components/event-details';
import SectionCarousel from '../components/testimonials';
import FreeEstimate from '../components/free-estimate';
import ReviewCTA from '../components/review-cta';
import Footer2 from '../components/footer-2';
import Eventgallery from '../components/Eventgallery';
import ReviewStats from '../components/review-stats';
import Navigation from '../components/navigation.js';
import NavigationTop from '../components/navigationTop'



const Reviews =()=>{
    return(
<>



<NavigationTop /> 
<img src="assets/main-logo.png" className="main-logo" />
<Navigation />

<EventDetails />
<ReviewCTA />
<ReviewStats />
 



     
<div className="sec_pad"> <SectionCarousel /> </div>
  <div className="mt-12 mb-12"><FreeEstimate /> </div>



<Eventgallery />



  <Footer2 />
          
</>

)}


export default Reviews;
