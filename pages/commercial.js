
import Container from '../components/container'
import Subscribe from '../components/Subscribe';
import CommercialCTA from '../components/commercial-cta';
import CommercialServices from '../components/commercial-services'
import Breadcrumb from '../components/breadcrumb';
import Clients from '../components/clients';
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal'



const Services = () => (
<>

 <Container>





 <div className = "row">
   <div className="col-lg-5">
   <img src="assets/commercial_cta.jpg" style={{marginTop: 8 + "rem"}}/>
   </div>

 <div className="mb-4 col-lg-7" style={{marginTop: 10 + "em", marginTop: 10 + "em" }}>
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
   
</Container>


<CommercialServices />


<div className="seo_sec_title text-center mb_70">
        <Fade bottom ><h2 style={{marginTop: 4 + 'em'}}>Take a look at why we are <br/> beloved by our clients, everywhere.</h2>
        <Clients className="text-center" /></Fade>
    </div>

<Subscribe />

</>
);


export default Services;