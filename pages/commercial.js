
import Subscribe from '../components/Subscribe';
import CommercialServices from '../components/commercial-services'
import Reveal from 'react-reveal'
import Footer from '../components/footer'
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'reactstrap';
import Navigation from '../components/navigation.js';
import NavigationTop from '../components/navigationTop'
import VisibilitySensor from "react-visibility-sensor";
import React from 'react'
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar/";

 

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


<NavigationTop /> 
<img src="assets/main-logo.png" className="main-logo" />
<Navigation />

<div className="container mx-auto">


 <div className = "row" >
   <div className="col-lg-5">
   <img src="assets/commercial_cta.jpg" style={{marginTop: 14.5 + "rem"}}/>
   </div>

   <div className="col-lg-1">

     </div>

 <div className="mt-5 col-lg-6" >
  <Reveal effect="fadeInUp" duration={1300}> 
  <div className="col-lg-11">
      <div className="sec_title text-center mb-3">
      <h2 className="display-2 sacramento body-color">A Truly <br />Clean Business </h2>
      </div> 
      </div>
  </Reveal>



  <Reveal effect="fadeInUp" duration={1600}> 
  <div className="col-lg-11">
      <div className=" text-justify mb-3"> 
      <p style={{color: '#3f4451'}}> Our focus on using all-green, natural and Eco-friendly products is not only a 
  healthier option for you and our team but a way of life. 
  The air you breathe every day at your workplace or home can be filled 
  with impurities that may affect your health over time, many of them 
  found in common household cleaners and disinfectants. We are here to combat this. 
  The surfaces you eat off of or the floor your dog likes to nap on should not only be clean but safe. 
  With our use of environmentally-conscious products we can guarantee they will be both at no extra charge to you. 
  While some companies may add on a fee for the use of all-green products at Ana Rose Cleaning Services, it’s on us.</p>
      </div>
      </div>
  </Reveal>

  <div className="col-lg-11">
    <div className="mb-3">
      <Reveal effect="fadeInUp" duration={1600} > 
      <h2 className="body-title">Our commitment to you</h2>
      </Reveal>
      <Reveal effect="fadeInUp" duration={1600} > 
        <h4 className="body-secondary-title">Quality Backed by:</h4>
      </Reveal>
      <Reveal effect="slideInRight" duration={1600} style={{margin: 3 + "rem"}} > 
      <li className="commercial-list"><span><i class="far fa-check-circle" style={{marginRight: 1 + "rem"}}></i>A 100% Satisfaction Guarantee</span></li>
      </Reveal>    
      <Reveal effect="slideInRight" duration={1200} > 
           <li className="commercial-list"><span><i class="far fa-check-circle" style={{marginRight: 1 + "rem"}}></i>Healthy & Environmentally Safe Cleaning</span></li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1300} > 
           <li className="commercial-list"><span><i class="far fa-check-circle" style={{marginRight: 1 + "rem"}}></i>Hassle-free Booking</span></li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1400} > 
           <li className="commercial-list"><span><i class="far fa-check-circle" style={{marginRight: 1 + "rem"}}></i>Flexible Scheduling</span></li>
      </Reveal>
      <Reveal effect="slideInRight" duration={1500} > 
        <li className="commercial-list"><span><i class="far fa-check-circle" style={{marginRight: 1 + "rem"}}></i>Certified Cleaning Professionals</span></li>
      </Reveal>
     </div>

      </div>
   </div>
</div>




<section className=" sec_pad">
      <div className="hosting_title security_title text-center">
        <div className='col-lg-11 margin-auto'>
          <Row>

            <Col lg='5'>
              <Fade duration={1400} >    
                  <p className='bison-bold text-decoration-uppercase body-color'>Over 1200 <br/> Jobs Completed </p>
              </Fade>  
            </Col>

            <Col lg='2'>
              <Fade duration={1400} >
                  <p className='bison-bold text-decoration-uppercase body-color'>
                      <span style={{padding: '10rem 0rem'}}>+</span> </p>
              </Fade>
            </Col>

            <Col lg='5'>
              <Fade duration={1400} >
                  <p className='bison-bold text-decoration-uppercase body-color'>& Still <br/> counting. </p>
              </Fade> 
            </Col>
          </Row>
        </div>
      </div>

<div className="seo_fact_info">
    <div className="seo_fact_item wow fadeIn">
        <div className="text">
            <div className="counter one">
              <Fade bottom duration={1400}>
                <VisibilitySensor>
                      {({ isVisible }) => {
                          const percentage = isVisible ? 69 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={692}
                        styles={buildStyles({    
                          rotation: 0,
                          textSize: '20px',
                          pathTransitionDuration: 2,
                          pathColor: '#e9c261',
                          textColor: '#3f4451',
                          trailColor: '#efd38e', })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </Fade>  
            </div>
                      <p>Happy Clients</p>
          </div>
    </div>

      

    <div className="seo_fact_item wow fadeIn">
        <div className="text">
            <div className="counter one">
              <Fade bottom duration={1400}>
                <VisibilitySensor>
                      {({ isVisible }) => {
                          const percentage = isVisible ? 97 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={970}
                        styles={buildStyles({
                          rotation: 0,
                          textSize: '20px',
                          pathTransitionDuration: 2,
                          pathColor: '#e9c261',
                          textColor: '#3f4451',
                          trailColor: '#efd38e',
                         })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </Fade>  
            </div>
                      <p>Projects</p>
          </div>
    </div>
      
  
    <div className="seo_fact_item wow fadeIn">
        <div className="text">
            <div className="counter one">
              <Fade bottom duration={1400}>
                <VisibilitySensor>
                      {({ isVisible }) => {
                          const percentage = isVisible ? 50 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={500}
                        styles={buildStyles({
                          rotation: 0,
                          textSize: '20px',
                          pathTransitionDuration: 2,
                          pathColor: '#e9c261',
                          textColor: '#3f4451',
                          trailColor: '#efd38e',
                         })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </Fade>  
            </div>
                      <p>Winners</p>
          </div>
    </div>
      
  
    <div className="seo_fact_item wow fadeIn">
        <div className="text">
            <div className="counter one">
              <Fade bottom duration={1400}>
                <VisibilitySensor>
                      {({ isVisible }) => {
                          const percentage = isVisible ? 94 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={940}
                        styles={buildStyles({
                          rotation: 0,
                          textSize: '20px',
                          pathTransitionDuration: 2,
                          pathColor: '#e9c261',
                          textColor: '#3f4451',
                          trailColor: '#efd38e',
                         })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </Fade>  
            </div>
                      <p>Experience</p>
          </div>
    </div>

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
