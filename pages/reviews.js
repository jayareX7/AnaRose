import React from 'react';
import EventDetails from '../components/reviews/event-details';
import SectionCarousel from '../components/reviews/testimonials'
import FreeEstimate from '../components/reviews/free-estimate'
import ReviewCTA from '../components/reviews/review-cta'
import Example from '../components/reviews/owner-testimonial.tsx'
import Footer2 from '../components/body/footer-2'





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
