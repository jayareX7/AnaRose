import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'
import BookAppointment from './book-appointment';
import { Button, Card, Collapse, Row, Col, Modal} from "reactstrap";

class ReturnPricing extends Component {
    render(){
        let {aClass, aimage, colClass, colClassTwo, Atitle, Atext}= this.props;
        return(
            <section className={`${aClass}`}>
                <div className="container">
                    <div className="row align-items-center">

                        <Fade left >
                        <div className={`${colClass}`}>
                            <div className="h_action_img">
                                <img className="img-fluid" src="assets/manage-account.png" alt="" style={{paddingRight: 4 + 'rem'}}/>
                            </div>
                        </div>
                    </Fade>

                        <Fade duration={1800}>
                        <div className={`${colClassTwo}`}>
                            <div className="h_action_content text-center">
                                <h2>Manage Your Account<br/>Online Today!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                               </div>
                               <div className="col-lg-12 flex margin-auto">
                               <div className="col-lg-6">
                               <button className="snipcart-customer-signin btn_three">Manage Account</button>
                               </div>
                               <div className="col-lg-6">
                                <BookAppointment /></div>
                                </div>
                        </div>
                        </Fade>

                    </div>
                </div>
            </section>
        )
    }
}
export default ReturnPricing;
