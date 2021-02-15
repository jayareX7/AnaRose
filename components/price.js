



import React from "react";

// reactstrap components
import {
  Button,
  Modal,
  Row,
  Col,
} from "reactstrap";

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
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setScheduleDefaultOpen(true)}
            type="button"
          >
            <div className="price_item">
                <img src="assets/scheduled.png" alt=""/>
                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Scheduled Cleanings</h5>
                <p>Create your first online course</p>
                <div className="price f_700 f_size_40 t_color2">$25.00<sub className="f_size_16 f_400">/ wk</sub></div>
                <ul className="list-unstyled p_list">
                    <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-close"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-close"></i>Lectus</li>
                </ul>
                <a href="/#" className="price_btn btn_hover">More Info</a>
            </div>
          </Button>
          <Modal
            isOpen={scheduleDefaultOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setScheduleDefaultOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setScheduleDefaultOpen(false)}
                type="button"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <h4 className=" heading mt-4">Scheduled</h4>
               <p>
              Some Other Text Here
               </p>
              </div>
            </div>
            <div className=" modal-footer">
              <Button className=" btn-white" color="default" type="button">
                Ok, Got it
              </Button>
              <Button
                className=" text-white ml-auto"
                color="link"
                onClick={() => setScheduleDefaultOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
        </Col>




<Col md="4">
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setOneNotificationOpen(true)}
            type="button"
          >
             <div className="price_item">
                <div className="tag"><span>Popular</span></div>
                <img src="assets/one-time.png" alt=""/>
                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">One Time Cleanings</h5>
                <p>Our most popular plan</p>
                <div className="price f_700 f_size_40 t_color2">$99.00<sub className="f_size_16 f_400">/ fee</sub></div>
                <ul className="list-unstyled p_list">
                <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-check"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-close"></i>Lectus</li>
                </ul>
               <a href="/#" className="price_btn btn_hover">More Info</a>
            </div>

          </Button>
          <Modal
            isOpen={oneNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setOneNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setOneNotificationOpen(false)}
                type="button"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <h4 className=" heading mt-4">One-Time</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className=" modal-footer">
              <Button className=" btn-white" color="default" type="button">
                Ok, Got it
              </Button>
              <Button
                className=" text-white ml-auto"
                color="link"
                onClick={() => setOneNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
        </Col>





        <Col md="4">
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setMoveScheduledOpen(true)}
            type="button"
          >
                <div className="price_item">
                <img src="assets/move-in.png" alt=""/>
                <h5 className="f_p f_size_20 f_600 t_color2 mt_30">Move In/Out Cleanings</h5>
                <p>Experience thebest of lorem</p>
                <div className="price f_700 f_size_40 t_color2">$175.00<sub className="f_size_16 f_400">/  fee</sub></div>
                <ul className="list-unstyled p_list">
                <li><i className="ti-check"></i>Sollicitudin</li>
                    <li><i className="ti-check"></i>Turpis Egestas</li>
                    <li><i className="ti-check"></i>Amet Venenatis</li>
                    <li><i className="ti-check"></i>Consectetur Adipiscing</li>
                    <li><i className="ti-check"></i>Lectus</li>
                </ul>
                <a href="/#" className="price_btn btn_hover">More Info</a>
            </div>
          </Button>
          <Modal
            isOpen={moveScheduledOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setMoveScheduledOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setMoveScheduledOpen(false)}
                type="button"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <h4 className=" heading mt-4">Move-In</h4>

          <p>
          Place Text Here
          </p>

              </div>
            </div>
            <div className=" modal-footer">
              <Button className=" btn-white" color="default" type="button">
                Ok, Got it
              </Button>
              <Button
                className=" text-white ml-auto"
                color="link"
                onClick={() => setMoveScheduledOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
        </Col>





       
      </Row>
      </div>
      </section>
    </>
  );
}

export default Example;










