import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'

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
                                <a href="/#" className="hosting_btn btn_hover">Manage Account</a>
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
