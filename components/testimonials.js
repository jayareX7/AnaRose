import React from 'react';
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import Fade from 'react-reveal/Fade'


const residentialItems = [
  {
    src: "assets/testimonial_bg.png",
    altText: "Yelp/AnaRoseCleaning",
    caption: " Ana Rose Cleaning has worked in our home for at least 2 years. The service has been superb - any extra thing I need cleaned is taken care of right away. We have trusted Joy to clean our home in a porfessional way during this pandemic - and know she gives special attention to keeping us and herself safe while she is woking. I would recommend Ana Rose Cleaning to any of my friends.",
    header: "Mille Martin",
    key: "1",
    link: "Yelp/AnaRoseCleaning",
  },
  {
    src: "assets/testimonial_bg.png",
    altText: "Facebook/AnaRoseCleaning",
    caption: "Always great with communication and always on time. They always go the extra mile in our home even though I'm picky! Thank You so much!",
    header: "Emily King",
    key: "2",
    link: "Facebook/AnaRoseCleaning",
  },
  {
    src: "assets/testimonial_bg.png",
    altText: "Yelp/AnaRoseCleaning",
    caption: "When I stepped in the door that evening after the cleaning, I was greeted by lovely smells, and an enviroment that felt so clean and calm. It was absolutely refreshing to sit down after the day's work, in a house that was cleaned so thoroughly and with care. What a treat. Thank you Ana Rose!",
    header: "Serena Watley",
    key: "3",
    link: "Yelp/AnaRoseCleaning",
    
  },
];

const commercialItems = [
    {
        src: "assets/testimonial_bg.png",
        altText: "Yelp/AnaRoseCleaning",
        caption: " A great cleaning service! Couldn't be easier to work with, very flexible, responsive and wondeful attention to detail!",
        header: "Stephanie Dempsey",
        key: "1",
        link: "Yelp/AnaRoseCleaning",
      },
      {
        src: "assets/testimonial_bg.png",
        altText: "Facebook/AnaRoseCleaning",
        caption: "Ana Rose is wonderful and handles our during & post construction cleaning for our remodels. Couldn't ask for a better partner.",
        header: "Trey Gourley",
        key: "2",
        link: "Facebook/AnaRoseCleaning",
      },
      {
        src: "assets/testimonial_bg.png",
        altText: "Yelp/AnaRoseCleaning",
        caption: "The team at Ana Rose give nothing but 100 percent. The thought and care they put into customer satisfaction is unmatched. The hard work doesn't go unnoticed. If you want someone who is reliable and efficient, Ana Rose is who you need to hire!",
        header: "Adrienne Jerkins",
        key: "3",
        link: "Yelp/AnaRoseCleaning",
        
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
