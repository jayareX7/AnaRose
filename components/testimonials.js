import React from 'react';
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import Fade from 'react-reveal/Fade'


const residentialItems = [
  {
    src: "assets/testimonial_bg.png",
    altText: "www.hello.com",
    caption: " Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    header: "John Doe #1",
    key: "1",
    link: "www.hello.com",
  },
  {
    src: "assets/testimonial_bg.png",
    altText: "Slide 2",
    caption: "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    header: "John Doe #2",
    key: "2",
    link: "www.hello.com",
  },
  {
    src: "assets/testimonial_bg.png",
    altText: "Slide 3",
    caption: "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    header: "John Doe #3",
    key: "3",
    link: "www.hello.com",
    
  },
];

const commercialItems = [
    {
        src: "assets/testimonial_bg.png",
        altText: "www.hello.com",
        caption: " Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
        header: "John Doe #1",
        key: "1",
        link: "www.hello.com",
      },
      {
        src: "assets/testimonial_bg.png",
        altText: "Slide 2",
        caption: "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
        header: "John Doe #2",
        key: "2",
        link: "www.hello.com",
      },
      {
        src: "assets/testimonial_bg.png",
        altText: "Slide 3",
        caption: "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
        header: "John Doe #3",
        key: "3",
        link: "www.hello.com",
        
      },
    ];
   
const Testimonials =()=>{
    return(
      
    
        <div> 
     
            <section className="">
            <div className="container mx-auto px-5 ">
            <Fade bottom duration={1400}>    
              <Row>                    
                <Col md="6">
                  
                  <UncontrolledCarousel items={residentialItems} />
                  
                </Col>
                <Col md="6">
                  <div className="mt-6 client_image-1">
                  <img src='assets/residential-review.jpg' />
                  </div>
                </Col>
              </Row> 
        </Fade>

        <Fade bottom duration={1600}>    
              <Row>    
                <Col md="6" >
                <div className="mt-12 client_image-2">
                <img src='assets/commercial-review.jpg'  />
                </div>
                </Col>        
                <Col md="6">
                <div className="mt-12">    
                <UncontrolledCarousel items={commercialItems} />
                </div>
                </Col>
              </Row> 
            </Fade>
     </div>
            </section>
       
        </div>
    )}


export default Testimonials
