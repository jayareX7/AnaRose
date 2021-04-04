import React from 'react';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade'
import { Button, Card, Collapse, Row, Col, Modal} from "reactstrap";
import { Reveal } from 'react-reveal';

const ResidentialAbout =()=>{
    const [frameDefaultOpen, setFrameDefaultOpen] = React.useState(false);


    return(
        <section className="event_about_area margin-auto">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                         <Fade right duration={1600}>
                            <img src='assets/house-door.jpg' alt=""/>
                         </Fade>
                            <div className="about_bg"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">

                    <Fade duration={3000}>
                        <div className="event_about_content">
                            <h2>Book Your Appointment Today!</h2>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              Id faucibus nisl tincidunt eget nullam non nisi est sit. 
                              In nulla posuere sollicitudin aliquam ultrices sagittis.</p>
                              
                           <div className="row">

                          
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
                                       <Swing duration={2600}> 
                                       <img src='assets/marker.png' alt=""/>
                                       </Swing>
                                        <h6 style={{fontFamily: 'Bison-Bold', fontSize: 2 + "rem", letterSpacing: 0.2 + "rem"}}>Where</h6>
                                        <p>Provide Residential Address</p>
                                    </div>
                                </div>
                         

                        
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.4s">
                                    <Swing duration={2600}>    
                                        <img src='assets/timer.png' alt=""/>
                                    </Swing>
                                        <h6 style={{fontFamily: 'Bison-Bold', fontSize: 2 + "rem", letterSpacing: 0.2 + "rem"}}>When</h6>
                                        <p>Choose Time of <br/>Service</p> 
                                    </div>
                                </div>
                          


    

          <Modal
            isOpen={frameDefaultOpen}
            className="modal-danger "
            contentClassName="modal-content_2 bg-gradient-danger"
            onClick={() => setFrameDefaultOpen(false)}
          >
       
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <iframe src="https://anarose.simplybook.me/v2/" width="880" height="880" frameBorder="0" allowtransparency="true"></iframe>  
              </div>
            </div>

            <div className=" modal-footer">
              <Button className=" btn-white" color="default" type="button">
                Ok, Got it
              </Button>
              <Button
                className=" text-white ml-auto"
                color="link"
                onClick={() => setFrameDefaultOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>

  
                            </div>    
                        </div>
                    </Fade> 

      <div className='mt-5'>
        <Reveal effect='slideInLeft'>
          <Button
            block
            className=" mb-3 "
            color="none"
            onClick={() => setFrameDefaultOpen(true)}
            type="button"
            data-toggle="modal"
            data-target="#myModal"
          >
               <button type="submit" className="btn_three">Schedule An Appointment</button>
          </Button>
          </Reveal>
      </div>
                    </div>
               
                </div>   
            </div>
        </section>
    )
}

export default ResidentialAbout;