


import React from "react";
import ScheduledBuy from "./scheduled-buy";
import OneTimeBuy from "./one-time-buy";
import MoveBuy from "./move-buy";
import { Button,  Modal, Row, Col } from "reactstrap";
import Fade from 'react-reveal/Fade'

function Example() {
  const [scheduleDefaultOpen, setScheduleDefaultOpen] = React.useState(false);
  const [oneNotificationOpen, setOneNotificationOpen] = React.useState(false);
   const [moveScheduledOpen, setMoveScheduledOpen] = React.useState(false);
   
  return (
    <>
    <section className="support_price_area sec_pad ">
<div className="container p0">
    
      <Row>
        <Col md="4">
          <div
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setScheduleDefaultOpen(true)}
            type="button"
          >
            <Fade bottom duration={1600}>
            <div className="price_item">
                <img src="assets/scheduled.png" alt=""/>
                <h5 className="bison-bold mt-4 display-6">Scheduled Cleanings</h5>
                <p>Create your first online course</p>
                <div className="price f_700 f_size_40 t_color2">$25.00<sub className="f_size_16 f_400">/ wk</sub></div>
                <ul className="list-unstyled p_list">
                    <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-close"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-close"></i>Lectus</li>
                </ul>
                <ScheduledBuy />
            </div>
            </Fade>


          </div>
          
        </Col>




<Col md="4">
          <div
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setOneNotificationOpen(true)}
            type="button"
          >

          <Fade bottom duration={2400}>
             <div className="price_item">
                <div className="tag"><span>Popular</span></div>
                <img src="assets/one-time.png" alt=""/>
                <h5 className="bison-bold mt-4 display-6">One Time Cleanings</h5>
                <p>Our most popular plan</p>
                <div className="price f_700 f_size_40 t_color2">$99.00<sub className="f_size_16 f_400">/ fee</sub></div>
                <ul className="list-unstyled p_list">
                <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-check"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-close"></i>Lectus</li>
                </ul>
                <OneTimeBuy />
            </div>
        </Fade>


          </div>
          
        </Col>





        <Col md="4">
          <div
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setMoveScheduledOpen(true)}
            type="button"
          >

            <Fade bottom duration={3200}>
                <div className="price_item">
                <img src="assets/move-in.png" alt=""/>
                <h5 className="bison-bold mt-4 display-6">Move In/Out Cleanings</h5>
                <p>Experience thebest of lorem</p>
                <div className="price f_700 f_size_40 t_color2">$175.00<sub className="f_size_16 f_400">/  fee</sub></div>
                <ul className="list-unstyled p_list">
                <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-check"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-check"></i>Lectus</li>
                </ul>
               <MoveBuy />
            </div>
          </Fade>
          </div>
         
        </Col>





       
      </Row>
      </div>
      </section>
    </>
  );
}

export default Example;










