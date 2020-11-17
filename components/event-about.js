import React from 'react';

const EventAbout =()=>{
    return(
        <section className="event_about_area">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src='assets/home-event/about.jpg' alt=""/>
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
                                </div><button type="submit" className="btn_three">Schedule An Appointment</button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default EventAbout;