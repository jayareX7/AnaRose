import React from "react";
import FAQ from './faq';
import Container  from './container';
// reactstrap components
import { Button, Card, Collapse, Row, Col, Modal} from "reactstrap";
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal'


function Example() {
  const [generalCollapseOpen, setGeneralCollapseOpen] = React.useState(false);
  const [windowCollapseOpen, setWindowCollapseOpen] = React.useState(false);
  const [deepCollapseOpen, setDeepCollapseOpen] = React.useState(false);
  const [carpetCollapseOpen, setCarpetCollapseOpen] = React.useState(false);
  const [sanitizeCollapseOpen, setSanitizeCollapseOpen] = React.useState(false);
  const [postCollapseOpen, setPostCollapseOpen] = React.useState(false);
  const [frameDefaultOpen, setFrameDefaultOpen] = React.useState(false);
  return (
    <>



<section className="sec_pad pricing_area_four mt_120 text-center">

    <Container>

    <div className="row">
   <div className="col-lg-4"> 
   <Fade left>
      <img className="mt-7" src="assets/quote.jpg" /></Fade>
   </div>
   <div className="col-lg-8"> 
   <div className=" text-center">
     <Fade bottom duration={1600}>
                  <h2 className="wow fadeInUp mt-5 display-4 bison-bold" data-wow-delay="0.2s">
                  <span className="sacramento">Looking for something else?</span> <br /> Check out our individual services!</h2>
                  <p className="mt-4 body-color mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
                  </p>
                  </Fade>
            </div>
            <Fade bottom duration={2000}><FAQ /> </Fade>
            </div>
</div>

<Reveal effect='flipInX' duration={1600}>
              <Row> 
              <Col md="12"> 
   
              

      <p className="mt-9">

      <h2 className="wow fadeInUp display-4 bison-bold" data-wow-delay="0.2s">
        <span className="sacramento">Have Additional Questions?</span><br/>
        Find The Answers To Them Below: </h2>
        
        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setGeneralCollapseOpen(!generalCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          className='collapsed'
          
        >
         
         <div className="t_integration_item">
                    <img src="assets/bubbles.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                      <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">General</h5> 
                  </div>  
        </Button>

        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setWindowCollapseOpen(!windowCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          
        >
          
          <div className="t_integration_item">
                    <img src="assets/wipe.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                      <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">Windows</h5> 
                  </div>   
        </Button>


        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setDeepCollapseOpen(!deepCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          
        >
            <div className="t_integration_item">
                     <img src="assets/bucket.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                         <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">Deep</h5> 
                  </div>       
        </Button>



        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setCarpetCollapseOpen(!carpetCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          
        >
            <div className="t_integration_item">
                     <img src="assets/cleaning-service.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                         <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">Floors</h5> 
                  </div> 
        </Button>



        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setSanitizeCollapseOpen(!sanitizeCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          
        >
              <div className="t_integration_item">
                     <img src="assets/cleaning-tools.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                         <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">Sanitizing</h5> 
                  </div>    
        </Button>




        <Button
          color="red"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setPostCollapseOpen(!postCollapseOpen);
          }}
          role="button"
          id="collapseExample"
          
        >
           <div className="t_integration_item">
                      <img src="assets/cleaning-cart.png" style={{margin: '0 auto', width: '60%'}} alt=""/>
                         <h5 className="bison-bold display-7 fw_bold spacing-0 mt-2">Construction</h5> 
                  </div>    
        </Button>
      </p>

      <Collapse isOpen={generalCollapseOpen}>
        <Card className=" card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Card>
      </Collapse>


      <Collapse isOpen={windowCollapseOpen}>
        <Card className=" card-body">
        <h3>Windows:</h3><br />
Ana Rose Cleaning Services, LLC provides window cleaning to commercial 
residential facilities. Our professionals are trained to handle anything when it
comes to the care of your windows. No streaks, no mess! <br />
<br />
        </Card>
      </Collapse>


      <Collapse isOpen={deepCollapseOpen}>
        <Card className=" card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Card>
      </Collapse>


      <Collapse isOpen={carpetCollapseOpen}>
        <Card className=" card-body">
        <h3>Hard Floors:</h3> <br />
We handle a variety of floors, from wood to tile and everything in between. Every 
floor is different and so every product needs to be as well. We’ve got you 
covered! Our floor care team is specifically trained for any floor! <br />
<br />
<h3>Carpet Care:</h3><br />
Ana Rose Cleaning Services, LLC offers carpet cleaning designed to remove the
toughest stains and return carpet to a fresh robust look! <br />
<br />
        </Card>
      </Collapse>


      <Collapse isOpen={sanitizeCollapseOpen}>
        <Card className=" card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Card>
      </Collapse>


      <Collapse isOpen={postCollapseOpen}>
        <Card className=" card-body">
        <h3>Post-Contruction Clean:</h3><br />
Ana Rose Cleaning Services, LLC offers a specialized clean for any construction or
remodel project. We provide services for both commercial and residential needs.
We offer an intense top to bottom clean for all of your post-remodel needs. Let us
take care of the dust and grime that can build up while your construction projects
are being done.
        </Card>
      </Collapse>

     


<div class="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
          <iframe src="https://anarose.simplybook.me/v2/" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<section className="sec_pad_80">

<Col lg='12'>
    <div className="col-lg-3 margin-auto">
  <a href="/contact" ><button class="mb-3 btn_three">Get A Free Estimate</button></a>
  <div className="col-lg-12 mb-2 text-center"> OR </div>
          <Button
            block="true"
            className="mb-3 margin-auto"
            color="none"
            onClick={() => setFrameDefaultOpen(true)}
            type="button"
            data-toggle="modal"
            data-target="#myModal"
          >
            <button class="btn_three" data-toggle="modal" data-target="#myModal" style={{margin: '0 auto'}}>Schedule An Appointment</button>
          </Button>

        
          </div>
          </Col>
          <Modal
            isOpen={frameDefaultOpen}
            className="modal-danger "
            contentClassName="modal-content_2 bg-gradient-danger"
            onClick={() => setFrameDefaultOpen(false)}
          >
       
            <div className=" modal-body">
              <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x"></i>
                <iframe src="https://anarose.simplybook.me/v2/" width="800" height="880" frameBorder="0" allowTransparency="true"></iframe>  
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
</section>

</Col>
</Row>
</Reveal>
</Container>

</section>

    </>
  );
}

export default Example;