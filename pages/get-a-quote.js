import React, {Component} from 'react';
import Buy_Button from '../components/buy-button'
import Container from '../components/container'
import { UncontrolledCarousel, Row, Col } from "reactstrap"


class SequrityPrice extends Component {
    constructor(){
        super();
        this.state= {
            list: [
                {
                    id: 1,
                    adTitle: "Stovetop/Counter Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 2,
                    adTitle: "Wash Dishes/Utensils",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 3,
                    adTitle: "Vent Degreasing",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 4,
                    adTitle: "Trash Removal",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 5,
                    adTitle: "Laundry/Wash/Fold",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 6,
                    adTitle: "Baseboard Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 7,
                    adTitle: "Carpet Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 8,
                    adTitle: "Window Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 9,
                    adTitle: "Appliance Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 10,
                    adTitle: "Pet Reset Package",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                }
            ]
        }
    }
    render(){
        return(
<>



<section className="pricing_area_four sec_pad">
    <Container>
              <Row>                    
                <Col md="6">
                <a href="https://testenviroment.simplybook.me/v2/" target="_blank" alt="Booking button" width="200" height="200">
                <button  type="submit" className="btn_three margin-auto">Schedule An Appointment</button></a>
        
                </Col>
                <Col md="6">
                  <img src="assets/quote.jpg" style={{height: 36.5 + 'rem', margin: 4 + 'rem'}} />
                </Col>
              </Row> 


     </Container>
            </section>
       

                            





            <section className="pricing_area_four sec_pad">
            

                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Looking for something else?</span> Check out our individual services!</h2>
                </div>
                <div className="price_info_two price_info_three">
                    
                    <div className="price_body">
                        {
                            this.state.list.map( list => {
                                return(
                                    <div className="pr_list" key={list.id}>
                                        <div className="price_item">
                                        <h5 className="pr_title" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save time by using keyboard shortcuts all across SaasLand">{list.adTitle}</h5>
                                        </div>
                                        <div className="price_item" data-title="Free">
                                            <h5 className="check"><i className={list.icon}></i></h5>
                                        </div>
                                        <div className="price_item" data-title="Enterprise">
                                            <h5 className="check"><i className={list.icon2}></i></h5>
                                        </div>
                                        <div className="price_item" data-title="Unlimited">
                                            <h5 className="check"><i className={list.icon3}></i></h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="pr_list">
                            <div className="price_item">
                            </div>
                            <div className="price_item">
                            <Buy_Button/>
                            </div>
                            <div className="price_item">
                            <Buy_Button/>
                            </div>
                            <div className="price_item">
                            <Buy_Button/>
                            </div>
                        </div>
                    </div>
                </div>
           
        </section>
        </>
        )
    }
}


export default SequrityPrice;