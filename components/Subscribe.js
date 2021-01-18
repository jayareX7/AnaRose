import React, {Component} from 'react';

class Subscribe extends Component {
    render(){

        return(
            <React.Fragment>
                 


               

                <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                    <div className="seo_call_action_text" >
                       <div className="col-6"> <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                       </div>
                        <div className="col-6"> <a href=".#" style={{ width: '100%', float: 'right'}} >
                        <img src='assets/banner.png' alt="" /></a>
                    </div>
                    </div>
                   
                        <div className="container"> 
                      
                        
                        <a href="/" className="about_btn mt_30 float-right">Get A Free Estimate</a>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Subscribe;