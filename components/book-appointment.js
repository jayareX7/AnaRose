import { Button, Card, Collapse, Row, Col, Modal} from "reactstrap";
import Fade  from 'react-reveal/Fade';
import React from 'react'

const Appointment =()=>{
    const [frameDefaultOpen, setFrameDefaultOpen] = React.useState(false);


    return(
<>


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



        <Button
          block
          className=" float-right "
          color="none"
          onClick={() => setFrameDefaultOpen(true)}
          type="button"
          data-toggle="modal"
          data-target="#myModal"
        >
            <Fade  duration={1800}>
                <button type="submit" className="btn_three">Manage Appointments</button>
            </Fade>
          </Button>
      

    </>
    )}

    


    export default Appointment;

