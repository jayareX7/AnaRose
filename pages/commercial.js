
import Subscribe from '../components/commercial/Subscribe';
import CommercialServices from '../components/commercial/commercial-services'
import Reveal from 'react-reveal'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Footer from '../components/body/footer'




// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class Services extends React.Component {
  render() {
    return (
<>

<div className="container mx-auto">


 <div className = "row" >
   <div className="col-lg-5">
   <img src="assets/commercial_cta.jpg" style={{marginTop: 8 + "rem"}}/>
   </div>

 <div className="mt-5 col-lg-7" >
  <Reveal effect="fadeInUp" duration={1300}> 
  
      <div className="sec_title text-center mb_70">
      <h2 style={{color: '#3f4451', marginLeft: 4 + "rem"}}>A Truly Clean Business </h2>
      </div> 
  </Reveal>



  <Reveal effect="fadeInUp" duration={1600}> 
      <div className=" text-center mb_70"> 
      <p style={{color: '#3f4451', marginLeft: 4 + "rem"}}> Our focus on using all-green, natural and Eco-friendly products is not only a 
  healthier option for you and our team but a way of life. 
  The air you breathe every day at your workplace or home can be filled 
  with impurities that may affect your health over time, many of them 
  found in common household cleaners and disinfectants. We are here to combat this. 
  The surfaces you eat off of or the floor your dog likes to nap on should not only be clean but safe. 
  With our use of environmentally-conscious products we can guarantee they will be both at no extra charge to you. 
  While some companies may add on a fee for the use of all-green products at Ana Rose Cleaning Services, it’s on us.</p>
      </div>
  </Reveal>


    <div className="mb_70" style={{ marginLeft: 4 + "rem"}}>
      <Reveal effect="fadeInUp" duration={1600} > 
        <h2 style={{color: '#3f4451'}}>Our commitment to you:</h2>
      </Reveal>
      <Reveal effect="fadeInUp" duration={1600} > 
        <h4 style={{color: '#3f4451'}}>Quality Backed by:</h4>
      </Reveal>
      <Reveal effect="slideInRight" duration={1600} > 
        <li style={{color: '#3f4451'}}>a 100% Satisfaction Guarantee</li>
      </Reveal>    
      <Reveal effect="slideInRight" duration={1200} > 
        <li style={{color: '#3f4451'}}>Healthy & Environmentally Safe Cleaning</li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1300} > 
        <li style={{color: '#3f4451'}}>Hassle-free Booking</li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1400} > 
        <li style={{color: '#3f4451'}}>Flexible Scheduling</li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1500} > 
        <li style={{color: '#3f4451'}}>Certified Cleaning Professionals</li>
      </Reveal>



      </div>
   </div>
</div>




<section className=" sec_pad">
  <div className="hosting_title security_title text-center">

 
    <h2 className="my-3"><span>Over 1200+</span> jobs completed &amp; Still counting.</h2></div>

    <div className="seo_fact_info"><div className="seo_fact_item wow fadeIn">
      <div className="text"><div className="counter one">693</div>
      <p>Happy Clients</p>
      </div></div>
      
    <div className="seo_fact_item wow fadeIn" data-wow-delay="0.3s">
      <div className="text">
        <div className="counter two">276</div> <p>Projects</p>
        </div></div>
      
    <div className="seo_fact_item wow fadeIn" data-wow-delay="0.6s">
      <div className="text">
        <div className="counter three">102</div> <p>SEO Winners</p>
        </div></div>
      
      <div className="seo_fact_item last wow fadeIn" data-wow-delay="0.9s">
        <div className="text">
          <div className="counter four">93</div> <p>Experience</p>
          </div></div>
          
        </div>
    </section>



</div>
   

<CommercialServices />



<Subscribe />

<Footer />

</>
);










  }
}

export default Services;
