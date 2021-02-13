import React from 'react';
import Testimonials from '../components/testimonials'
import Subscribe from '../components/Subscribe'
import EventDetails from '../components/event-details';
import Clients from '../components/clients';
import SectionCarousel from '../components/testimonials'





const Reviews =()=>{
    return(
<>
               <EventDetails />
                    <div className="chat_get_started_content text-center">
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s">Get started with us</h2>
                        <p style ={{color: '#3f4451'}}>A better experience for your customers, fewer headaches for your team. You'll be set up in minutes.</p>
                    </div>
              
         
          <SectionCarousel />
    
                      
                        
          <div className=" seo_banner_content col-md-12 text-center">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                        </div>
                            <div className='text-center'>
                            <a href="/" className="about_btn">Get A Free Estimate</a>
                            </div>   

</>

)}


export default Reviews;
