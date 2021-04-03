import Reveal from 'react-reveal';

const Footer2 = () => {

return (

    <>


<Reveal effect="fadeIn" duration={1400}> 
<section className="footer-section sec_pad">  
                      
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 ">  
                                    <img width="156" height="40" src="assets/secondary-logo.png" style={{ width: 12 + 'rem', margin: '0 auto'}} className="mt-4 attachment-full size-full"  alt="" loading="lazy" />
                                </div>
                            </div>
                        </div>

                      
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"> 
                                <p className="my-5" style={{color: '#3f4451'}}>Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit
                                <br/> am semper tristique. Donec nec neque lectus.</p>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 margin-auto text-center">

                                <form action="#" className="digital_agency_newsletter" method="post" noValidate="true">
                                    <div className="newsletter_form input-group">
                                        <label for="colFormLabelSm" className="col-form-label col-form-label-sm">
                                            <i className="fas fa-envelope secondary-color mr-1"></i> </label> 
                                            <input type="text" id="colFormLabelSm" name="EMAIL" className="form-control memail" placeHolder="Type your email..." /> 
                                                <button type="submit" className="email_submit_btn">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{display: 'none'}}></p> 
                                        <p className="mchimp-sucmessage" style={{display: 'none'}}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                        
                                       

    
                <div className="footer-element mt-5 footer-element-data footer-shape-circle footer-grid-0 footer-widget footer-widget-social-icons" data-id="abd299a" data-element_type="widget" data-widget_type="social-icons.default">
                    <div className="footer-widget-container">
                        <div className="footer-social-icons-wrapper footer-grid">

    
                                    <div className="footer-grid-item"> 
                                    <a className="footer-icon footer-social-icon footer-social-icon-facebook-f footer-repeater-item-data wow fadeIn" target="_blank"> 
                                    <i className="fab secondary-color fa-facebook-f"></i> </a> 
                                    
                                    </div>

                                    <div className="footer-grid-item"> 
                                    <a className="footer-icon footer-social-icon footer-social-icon-facebook-f footer-repeater-item-data" target="_blank">
                                   
                                    <i className="fab fab secondary-color fa-twitter"></i> </a>
                                    </div>

                                    <div className="footer-grid-item"> 
                                    <a className="footer-icon footer-social-icon footer-social-icon-facebook-f footer-repeater-item-data" target="_blank">
                                  
                                    <i className="fab secondary-color fa-youtube"></i> </a>
                                    </div>

                                    <div className="footer-grid-item"> 
                                    <a className="footer-icon footer-social-icon footer-social-icon-facebook-f footer-repeater-item-data" target="_blank">
                                
                                    <i className="fab secondary-color fa-linkedin-in"></i> </a>
                                    </div>
                                            
                                
                                </div>
                            </div>
                    </div>

                    <div className="container">
                                            <div className="row">
                                               <div className="col-lg-12 text-center">
                                                    <p className="mt-4" style={{color: '#3f4451'}}>Ana Rose Cleaning – Copyright 2021 <br/> Design by <a href="http://www.avxstudio.com/" style={{color: '#3f4451'}}>AVX Studio</a></p>
                                                </div>
                                            </div>
                                        </div>
         
</section>
</Reveal>
</>
)}

export default Footer2;