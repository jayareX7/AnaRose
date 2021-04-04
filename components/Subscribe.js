import React, {Component} from 'react';
import { Reveal } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';

class Subscribe extends Component {
    render(){

        return(
            <React.Fragment>
                 


               

                <section className=" sec_pad wow fadeUpIn"  style={{backgroundImage: "url(../assets/review-bg.jpg", backgroundSize: "cover"}}  >
                    <div className="container">
                    <div className="seo_call_action_text" >
                        <div className="col-lg-12 text-center"> 
                    <LightSpeed left duration={1500} >  
                        <h2>Ready to get started?<br/></h2>
                    </LightSpeed>

                    <LightSpeed left duration={1500}>
                        <h4 className="Bison-Light display-3 secondary-color" style={{textShadow: "3px 3px 4px black"}}>lt's fast, free and very easy!</h4>
                    </LightSpeed>

                    <Reveal effect='fadeIn' duration={3000}>
                         <a href="/contact" className="about_btn body-color mt-5">Get A Free Estimate</a>
                       </Reveal> 
                        </div>
                    </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Subscribe;