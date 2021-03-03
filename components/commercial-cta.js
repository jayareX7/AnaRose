import React from 'react';
import Reveal from 'react-reveal'

const commercialCTA =()=>{
    return(
        
        
        <div className="container">
            <div className="erp_action_content text-center">
                <Reveal effect="fadeInUp" duration={1600}>
                <h3 style={{color: 'white'}}>Experience a smarter way to do business</h3>
                <p style={{color: 'white'}}>With All-in-one<span style={{color: '#84ac7e'}}>Service Plan</span>Included</p>
                <a href="/#" className="er_btn er_btn_two">Get Started Today!</a>
           </Reveal> 
           </div>
        </div>
        
  
  
    )
}
export default commercialCTA;