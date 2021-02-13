

import react from 'react';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  Row,
  Col,
} from "reactstrap";





export default function Example() {

 
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false
  );
   const [modalScheduledOpen, setModalScheduledOpen] = React.useState(false);
  return (
    <>



     
          
<section className="support_integration_area">
    <div className="container">
        
    <div className="row">
                
            
<div className="col-lg-8" style={{display: 'flex'}}>
       

             
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                    <img src="assets/bubbles.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                     <h5>General Clean</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
       
 





          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                    <img src="assets/wipe.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                     <h5>Window Cleaning</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
      
 








          
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                     <img src="assets/bucket.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                        <h5>Deep Clean</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
       
          <div className="col-lg-3"><img src="assets/commercial_cta.jpg" style={{width: 25 + "%", position: 'absolute', right: 4 + 'rem'}}/>
          </div>
    </div>


  

  <div className="row">
  
  <div className="col-lg-8" style={{display: 'flex'}}>
      
       
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                     <img src="assets/cleaning-service.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                        <h5>Carpet Cleaning</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
      


          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                     <img src="assets/cleaning-tools.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                        <h5>Sanitizing</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
      






         
          <Button
            block
            className=" mb-3 price_content price_content_two"
            color="none"
            onClick={() => setModalNotificationOpen(true)}
            type="button"
          >
            
                   <div className="s_integration_item">
                      <img src="assets/cleaning-cart.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                        <h5>Post-Construction</h5> 
                  </div>              
          </Button>

          <Modal
            isOpen={modalNotificationOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            onClick={() => setModalNotificationOpen(false)}
          >
            <div className=" modal-header">
              <h6 className=" modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className=" close"
                onClick={() => setModalNotificationOpen(false)}
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
                onClick={() => setModalNotificationOpen(false)}
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
  
</section>
  </>
) 
}





