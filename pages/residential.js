import Price from '../components/price'
import ReturnPricing from '../components/return-pricing';
import ResidentialSteps from '../components/residential-steps'
import ResidentialAbout from '../components/residential-about';
import Footer from '../components/footer';
import Container from '../components/container'
import Fade from "react-reveal/Fade";
import { Row } from 'reactstrap'
import Navigation from '../components/navigation.js';
import NavigationTop from '../components/navigationTop'

const Posts = ({ slugs }) => (
 <>

<NavigationTop /> 
<img src="assets/main-logo.png" className="main-logo" />
<Navigation />
 <div className="container mx-auto">

<ResidentialAbout />

  <ResidentialSteps />



</div>

<ReturnPricing aClass="h_action_area" aimage="action_img.png" colClass="col-lg-6" colClassTwo="col-lg-6" />

<Container>
  <Row>

  <div className="col-lg-6 text-center" style={{marginTop: 5 + 'em'}}>
    <div className="text-center">

    <Fade top duration={1600}>
  <h1 className="display-3 body-color sacramento">Best Home Cleaning Services in Dallas </h1>
  </Fade>
    </div> 

       <Fade top duration={1900}>
  <p> <span className='display-1 secondary-color mt-4 bison-bold'>
    Ana Rose Cleaning </span> <br/> <span className='display-4 body-color bison-bold'>the best in home cleaning<br/>available in town.</span> <br /> </p>
      </Fade>

  <br />

<Fade top duration={2200}>
<p className="body-color mt-4 display-65 text-justify"><span className="display-3 body-color fw_700 text-transform-uppercase"> We </span> provide a top to bottom approach, 
 with a detailed plan to guarantee your home is clean as possible. 
All of our products are eco-friendly and ensure your home isn’t just clean, but healthy.
</p>
</Fade>

  
   </div>

    <div className="col-lg-6" style={{marginTop: 4 + 'em'}}>
    <Fade right duration={1600}>
      <img src='assets/price-list.jpg' />
    </Fade>
  </div>
 
  </Row>

</Container>

<div style={{marginTop: 4 + 'em'}}>
<Price />
</div>

<Footer />

 </>
);



export default Posts;