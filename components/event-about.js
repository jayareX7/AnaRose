import React from 'react';
import { Button, Card, Collapse, Row, Col, Modal} from "reactstrap";

const EventAbout =()=>{
    const [frameDefaultOpen, setFrameDefaultOpen] = React.useState(false);


    return(
        <section className="event_about_area">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src='assets/house-door.jpg' alt=""/>
                            <div className="about_bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event_about_content">
                            <h2 className="wow fadeInUp">Book Your Appointment Today!</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. In nulla posuere sollicitudin aliquam ultrices sagittis.</p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
                                        <img src='assets/home-event/marker.png' alt=""/>
                                        <h6>Where</h6>
                                        <p>Provide Residential Address</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.4s">
                                        <img src='assets/home-event/timer.png' alt=""/>
                                        <h6>When</h6>
                                        <p>Choose Time of <br/>Service</p> 
                                        
                                    </div>
                                </div>
                             
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
          <iframe src="https://testenviroment.simplybook.me/v2/" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




    

          <Button
            block
            className=" mb-3"
            color="none"
            onClick={() => setFrameDefaultOpen(true)}
            type="button"
            data-toggle="modal"
            data-target="#myModal"
          >
       <button  type="submit" className="btn_three">Schedule An Appointment</button>
          </Button>
          <Modal
            isOpen={frameDefaultOpen}
            className="modal-danger "
            contentClassName="modal-content_2 bg-gradient-danger"
            onClick={() => setFrameDefaultOpen(false)}
          >
       
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <iframe src="https://testenviroment.simplybook.me/v2/" width="880" height="880" frameborder="0" allowtransparency="true"></iframe>  
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
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default EventAbout;