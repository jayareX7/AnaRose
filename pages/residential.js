import Price from '../components/price'
import Container from '../components/container'
import ReturnPricing from '../components/return-pricing';
import CoreFeatures from '../components/core-features'
import DesignBanner from '../components/design-banner';
import EventAbout from '../components/event-about';

const Posts = ({ slugs }) => (
 <>

<Container>

<EventAbout />

  <CoreFeatures />



</Container>

<ReturnPricing aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" Atitle="Managed wordpress Hosting on all plans" Atext="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!"/>

<Container>
  
<section className="chat_get_started_content text-center" style={{marginTop: 4 + 'em'}}>
  
  <h4 className="wow fadeInUp" data-wow-delay="0.2s">Best Home Cleaning Services in Dallas </h4> </section>
  <div style={{marginTop: 4 + 'em'}}>
  <p  style={{color: '#3f4451'}}>Ana Rose Cleaning offers the best in home cleaning. 
  Our residential service include scheduled cleaning as well as one time cleaning. 
  We offer a top to bottom approach, with a detailed plan to guarantee your home is clean as possible. 
  All of our products are eco-friendly and ensure your home isn’t just clean, but healthy.</p>
    </div>
  

<Price />
</Container>

 </>
);



export default Posts;