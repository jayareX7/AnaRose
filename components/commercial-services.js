import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  Row,
  Col,
} from "reactstrap";
import Container  from './container';
import Reveal from 'react-reveal'
import Zoom from "react-reveal/Zoom";




export default function OwnerTestimonial() {

  const [generalNotificationOpen, setGeneralNotificationOpen] = React.useState(
    false
  );
  
  const [windowNotificationOpen, setWindowNotificationOpen] = React.useState(
    false
  );
  const [deepNotificationOpen, setDeepNotificationOpen] = React.useState(
    false
  );
  const [carpetNotificationOpen, setCarpetNotificationOpen] = React.useState(
    false
  );
  const [sanitizeNotificationOpen, setSanitizeNotificationOpen] = React.useState(
    false
  );
  
  const [postNotificationOpen, setPostNotificationOpen] = React.useState(
    false
  );
  return (
  














     
          <div className="support_integration_area pb_120 " >
          
            <div className="chat_get_started_content mb_90 text-center">
            <Zoom top duration={1600} >    
              <h2>Get started with us</h2> </Zoom>
            <Reveal effect="slideInRight" duration={1500} >           
               <p style ={{color: '#3f4451'}}>A better experience for your customers, fewer headaches for your team. You'll be set up in minutes.</p> </Reveal>
                    </div>
                    
                    <Container>
                  <div className="row mt-2 ">
                    
                      <div className="col-lg-8 mt-5 text-center">      
          
         
         
          <Col lg="12"> 
          
            <Row>  
                      
          
                 
          
          <Reveal effect="flipInX" duration={1600} >      
                   <div className="col-lg-4 my-5">
                      <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setGeneralNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item" style={{margin: '0 auto'}}>
                              <img src="assets/bubbles.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                               <h5>General Clean</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={generalNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setGeneralNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setGeneralNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3 ">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">         
                              <img src="assets/bubbles.png" style={{margin: '0 auto', width: '35%'}} alt=""/>                   
                          </h4>
                          <br />
                         <p style={{color: '#000'}}>
          <h3>Check List for a General Clean: </h3><br />
          <br />
          <h5>1. Living room: </h5><br />
          o Empty trash <br />
          o Dust/clean every flat surface <br />
          o Dust/clean fans <br />
          o Sweep/vacuum and mop all flooring (clean under, mats and any small items
          that can be cleaned underneath) <br />
          o Remove any cobwebs <br />
          <br />
          <h5>2. Bathrooms: </h5><br />
          o Empty Trash<br />
          o Clean and disinfect shower (make sure all grout, tile or glass is thoroughly
          cleaned)<br />
          o Clean all mirrors and glass<br />
          o Clean and disinfect toilet<br />
          o Sweep/vacuum and mop all flooring (clean under rugs, mats, and any small
          items that can be cleaned underneath)<br />
          o Clean and disinfect counters<br />
          o Remove any cobwebs<br />
          o Fold toilet paper in a triangle<br /> 
          <br />
          
          <h5>3. Kitchen:</h5><br />
          o Clean inside and out of microwave<br />
          o Clean outside of all big appliances<br />
          o Clean and disinfect all countertops<br />
          o Dust/clean windowsills, fans<br />
          o Sweep/vacuum and mop all flooring (clean under rugs, mats and any small
          items that can be cleaned underneath)<br />
          o Remove any cobwebs<br />
          o Clean fronts of drawers and cabinets<br />
          <br />
          <h5>4. Bedroom:</h5><br />
          o Dust/clean flat surfaces, fan, bedframe, pictures and frames, tv, light fixtures<br />
          o Sweep/vacuum and mop all flooring (clean under rugs, mats, if able)<br />
          o Remove cobwebs<br />
          o Change sheets, make bed<br />
          <br />
          <h5>5. Dining room/formal dining</h5><br />
          o Dust/clean fan, top of table, flat surfaces, pictures, tv, light fixtures, window
          sills <br />
          o Sweep, vacuum and mop all flooring <br />
          o Remove cobwebs <br />
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
                          onClick={() => setGeneralNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                    </div>    
           </Reveal>
          
          
           <Reveal effect="flipInX" duration={1800} >  
                    <div className="col-lg-4 my-5">
                    <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setWindowNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item" style={{margin: '0 auto'}}>
                              <img src="assets/wipe.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                               <h5>Window Cleaning</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={windowNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setWindowNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setWindowNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3 ">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">
                      
                              <img src="assets/wipe.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                        
                          </h4>
                          <br />
                         <p style={{color: '#000'}}>
                       <h5>
          
                       </h5>
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
                          onClick={() => setWindowNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                
           </div>
          </Reveal>
          
          
          
          
          <Reveal effect="flipInX" duration={2000} >          
           <div className="col-lg-4 my-5">
         
                    <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setDeepNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item" style={{margin: '0 auto'}}>
                               <img src="assets/bucket.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                                  <h5>Deep Clean</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={deepNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setDeepNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setDeepNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">
                          <img src="assets/bucket.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                                  
                          </h4>
                         <p style={{color: '#000'}}>
                         <br />
                        <h3> Check List for Deep Clean: </h3> <br />
                        <br />
          <h5>1. Living Room </h5> <br />
          o Empty Trash <br />
          o Dust/clean every flat surface <br />
          o Dust/clean fan, pictures, tv, light fixtures, windowsills, baseboards <br />
          o Clean light covers <br />
          o Sweep/vacuum and mop all flooring (clean under rugs, mats, if able and any
          small item that can be cleaned underneath) <br />
          o Clean door nobs <br />
          o Remove any cobwebs <br />
          <br />
          <h5>2. Bathroom </h5> <br />
           Empty trash <br />
           Clean and disinfect shower (make sure all grout, tile or glass is thoroughly
          cleaned) <br />
           Clean all mirrors <br />
           Clean light covers <br />
           Clean door nobs <br />
           Clean and disinfect toilet (clean stand of toilet) <br />
          o Sweep/vacuum and mop all flooring (clean under rugs, mats, if able and any
          small item that can be cleaned underneath) <br />
           Clean and disinfect counters <br />
           Remove any cobwebs <br />
           Fold end of toilet paper in triangle <br />
           <br />
          <h5>3. Kitchen </h5> <br />
           Clean inside and out of microwave <br />
           Clean outside of all big appliances <br />
           Clean and disinfect all counter tops <br />
           Dust/clean windowsills, baseboards, doorknobs, light covers  <br />
           Clean mirrors and glass in doors <br />
           Clean, disinfect and dry sink <br />
           Clean tile and or backdrop <br />
           Clean hood/vent (if applicable) <br />
           Sweep/vacuum and mop all flooring (clean under rugs, mats, if able and any
          small item that can be cleaned underneath) <br />
           Remove any cobwebs <br />
           Clean fronts of drawers and cabinets <br />
          <br />
          <h5>4. Bedroom</h5> <br />
          
           Dust/clean flat surfaces, fan, bedframe, pictures, tv, light fixtures, windowsills,
          baseboards <br />
           Sweep/vacuum and mop all flooring (clean under rugs, mats, if able and any
          small item <br />
           Remove cobwebs <br />
           Change sheets, make bed <br />
          <br />
          <h5>5. Dining room/formal dining</h5> <br />
           Dust/clean fan, top of table, flat surfaces, pictures, tv, light fixtures, windowsills,
          baseboards <br />
           Sweep/vacuum and mop all flooring (clean under rugs, mats, if able and any
          small item <br />
           Remove cobwebs <br />
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
                          onClick={() => setDeepNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>                   
              </div>
   </Reveal>       
          

     <Reveal effect="flipInX" duration={2200} >          
            <div className="col-lg-4 my-5" >       
                    <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setCarpetNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item" style={{margin: '0 auto'}}>
                               <img src="assets/cleaning-service.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                                  <h5>Carpet Cleaning</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={carpetNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setCarpetNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setCarpetNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3 ">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">
                          <img src="assets/cleaning-tools.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                          </h4>
                         <p style={{color: '#000'}}>
                           <h5>
                           Some Other Text Here
                           </h5>
                     
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
                          onClick={() => setCarpetNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                </div>
                </Reveal>

                <Reveal effect="flipInX" duration={2400} >  
                <div className="col-lg-4 my-5">
                    <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setSanitizeNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item"style={{margin: '0 auto'}}>
                               <img src="assets/cleaning-tools.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                                  <h5>Sanitizing</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={sanitizeNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setSanitizeNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setSanitizeNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3 ">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">
                            <img src="assets/cleaning-tools.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                            </h4>
                         <p style={{color: '#000'}}>
                           <h5>
                           Some Other Text Here
                           </h5>
                     
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
                          onClick={() => setSanitizeNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>     
          </div>
          </Reveal>
          
          
 <Reveal effect="flipInX" duration={2600} >                     
          <div className="col-lg-4 my-5">
                   
                    <Button
                      block
                      className=" mb-3 price_content price_content_two"
                      color="none"
                      onClick={() => setPostNotificationOpen(true)}
                      type="button"
                    >
                      
                             <div className="s_integration_item" style={{margin: '0 auto'}}>
                                <img src="assets/cleaning-cart.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                                  <h5>Post-Construction</h5> 
                            </div>              
                    </Button>
          
                    <Modal
                      isOpen={postNotificationOpen}
                      className="modal-danger"
                      contentClassName="bg-gradient-danger"
                      onClick={() => setPostNotificationOpen(false)}
                    >
                      <div className=" modal-header">
                        <h6 className=" modal-title" id="modal-title-notification">
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className=" close"
                          onClick={() => setPostNotificationOpen(false)}
                          type="button"
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
          
                      <div className=" modal-body">
                        <div className=" py-3">
                          <i className=" ni ni-bell-55 ni-3x"></i>
                          <h4 className=" heading mt-4">
                          <img src="assets/cleaning-cart.png" style={{margin: '0 auto', width: '35%'}} alt=""/>
                          </h4>
                         <p style={{color: '#000'}}>
                           <h5>
                           Some Other Text Here
                           
                           </h5>
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
                          onClick={() => setPostNotificationOpen(false)}
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </div>
       </Reveal>

</Row>




</Col>
















                       </div> 
                  <Reveal effect='fadeInRight' duration={1600}>
                    <div className="col-lg-4  text-center">
                          <img src="assets/commercial-services.jpg" style={{width: 85 + "%", margin: '7rem auto'}}/>             
                    </div>
                  </Reveal>

              </div>
              </Container>
      </div>
    

  )}