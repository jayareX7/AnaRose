import React, {Component} from 'react';

class Price extends Component {
    render(){
        return(
            <section className="support_price_area sec_pad">
                <div className="container custom_container p0">
                    <div className="price_content price_content_two">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src="assets/new-home/p-1.png" alt=""/>
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
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <div className="tag"><span>Popular</span></div>
                                <img src="assets/new-home/p-2.png" alt=""/>
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
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="price_item">
                                <img src="assets/new-home/p-3.png" alt=""/>
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
                                <a href="/#" className="price_btn btn_hover">Start Today</a>
                            </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </section>
        )
    }
}
export default Price;