import Price from '../components/price'
import Container from '../components/container'
import ReturnPricing from '../components/return-pricing';
import CoreFeatures from '../components/core-features'
import DesignBanner from '../components/design-banner';
import EventAbout from '../components/event-about';
import { Button,  Card, CardHeader,  CardBody, Modal, Row, Col,} from "reactstrap";


const Posts = ({ slugs }) => (
 <>
<Container>

<EventAbout />

  <CoreFeatures />



</Container>

<ReturnPricing aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" Atitle="Managed wordpress Hosting on all plans" Atext="Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!" />

<Container>
  <Row>

  <div className="col-lg-6 text-center" style={{marginTop: 5 + 'em'}}>
    <div className="text-center">
  <h1 className="wow fadeInUp" data-wow-delay="0.2s">Best Home Cleaning Services in Dallas </h1>
    </div>  
  <h5  style={{color: '#3f4451', marginTop: 2 + 'em'}}>Ana Rose Cleaning offers the best in home cleaning. <br />

  <br />
  We provide a top to bottom approach, with a detailed plan to guarantee your home is clean as possible. 
  All of our products are eco-friendly and ensure your home isn’t just clean, but healthy.</h5>
    </div>
    <div className="col-lg-6" style={{marginTop: 4 + 'em'}}>
      <img src='assets/price-list.jpg' />
  </div>
 
  </Row>

</Container>

<div style={{marginTop: 4 + 'em'}}>
<Price />
</div>
 </>
);



export default Posts;