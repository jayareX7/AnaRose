import React from 'react';
import EventDetails from '../components/event-details';
import SectionCarousel from '../components/testimonials'
import FreeEstimate from '../components/free-estimate'
import ReviewCTA from '../components/review-cta'
import Footer2 from '../components/footer-2'
import Portfolio3grid from '../components/portfolios/Portfolio3grid'
import Portfoliofull4col from '../components/portfolios/Portfolio3grid'
import Eventgallery from '../components/portfolios/Eventgallery'
import ReviewStats from '../components/review-stats';




const Reviews =()=>{
    return(
<>



               <EventDetails />
                   
              
   

<ReviewCTA />
    <ReviewStats />
 



     
  <SectionCarousel />
  <div className="sec_pad"><FreeEstimate /> </div>



<Eventgallery />



  <Footer2 />
          
</>

)}


export default Reviews;
