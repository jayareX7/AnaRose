import React, {Component} from 'react';

class ReturnPricing extends Component {
    render(){
        let {aClass, aimage, colClass, colClassTwo, Atitle, Atext}= this.props;
        return(
            <section className={`${aClass}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={`${colClass}`}>
                            <div className="h_action_img">
                                <img className="img-fluid" src={"assets/hosting/" + aimage} alt=""/>
                            </div>
                        </div>
                        <div className={`${colClassTwo}`}>
                            <div className="h_action_content">
                                <h2>Manage Your Account<br/>Online Today!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="/#" className="hosting_btn btn_hover">Manage Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ReturnPricing;
