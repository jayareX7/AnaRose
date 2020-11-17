
import Container from '../components/container'
import Subscribe from '../components/Subscribe';
import CommercialCTA from '../components/commercial-cta';
import CommercialServices from '../components/commercial-services'
import Breadcrumb from '../components/breadcrumb';
import Clients from '../components/clients';
import Fade from 'react-reveal/Fade'


const Services = () => (
<>

<Breadcrumb />
<CommercialCTA />
 <Container>
  
 <div>
   
 </div>
  <div style={{marginTop: 10 + "em"}}>
    
<h4>A Truly Clean Business</h4>
<p>Our focus on using all-green, natural and Eco-friendly products is not only a 
  healthier option for you and our team but a way of life. 
  The air you breathe every day at your workplace or home can be filled 
  with impurities that may affect your health over time, many of them 
  found in common household cleaners and disinfectants. We are here to combat this. 
  The surfaces you eat off of or the floor your dog likes to nap on should not only be clean but safe. 
  With our use of environmentally-conscious products we can guarantee they will be both at no extra charge to you. 
  While some companies may add on a fee for the use of all-green products at Ana Rose Cleaning Services, it’s on us.</p>

<p>Our commitment to you:</p>

<p>Quality Backed by:
<li>a 100% Satisfaction Guarantee</li>
<li>Healthy & Environmentally Safe Cleaning</li>
<li>Hassle-free Booking</li>
<li>Flexible Scheduling</li>
<li>Certified Cleaning Professionals</li>
</p>

  </div>
   
</Container>


<CommercialServices />
<div className="seo_sec_title text-center mb_70">
        <Fade bottom ><h2 style={{marginTop: 4 + 'em'}}>Take a look at why we are <br/> beloved by our clients, everywhere.</h2>
        <Clients /></Fade>
    </div>

<Subscribe />

</>
);


export default Services;