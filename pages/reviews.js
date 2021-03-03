import React from 'react';
import EventDetails from '../components/event-details';
import SectionCarousel from '../components/testimonials'
import FreeEstimate from '../components/free-estimate'
import ReviewCTA from '../components/review-cta'
import Example from '../components/owner-testimonial.tsx'
import Footer2 from '../components/footer-2'





const Reviews =()=>{
    return(
<>



               <EventDetails />
                   
              
   

<ReviewCTA />
    
 



     
  <SectionCarousel />
<FreeEstimate />
  <div className="example-container">
    <Example />
  </div>
  <Footer2 />
          
</>

)}


export default Reviews;
