import React from 'react';
import Featuresitems from '../components/features-items';
import Index3 from '../components/home/index-3'
import Index4 from '../components/home/index-4'
import Index5 from '../components/home/index-5'
import Footer2 from '../components/body/footer-2'




export default function Index() {
  
  return (

  <>

         


<div className="container mx-auto">
  
<section className="process_area sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src='assets/home4/divider.png' alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Get Started" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Choose A Service"  descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Choose Add-Ons"
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Confirm Booking" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_5.png" iImg="icon_05.png" ftitle="Confirm Booking" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
                                
                           
            </section>

 <div className=" seo_banner_content col-md-12 text-center">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                        </div>
                            <div className='text-center'>
                            <a href="/" className="about_btn">Get A Free Estimate</a>
                            </div>
                    
            
           
</div>


<Index3 />


<Index4 />
<Index5 />
<Footer2 />
 
                </>
);



}
