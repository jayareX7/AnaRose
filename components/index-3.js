import React, { useState } from "react";
import { Reveal } from "react-reveal";



const data = [
  {
    id: "1",
    key: "1",
    title: "Lorem Ipsum" ,
    text: "Design to development",
    img: "assets/quote-cta.jpg"
  },
  {
    id: "2",
    key: "2",
    title: "Lorem Ipsum",
    text: "Design to development",
    img: "assets/commercial-cta.jpg"
  },
  {
    id: "3",
    key: "3",
    title: "Lorem Ipsum",
    text: "Design to development",
    img: "assets/home-banner.png"
  },
  {
    id: "4",
    key: "4",
    title: "Lorem Ipsum",
    text: "Design to development",
    img: "assets/home-banner.png"
  }
];



export default function Index3() {



  
  const [toggle, setToggle] = useState("1");

  return (
<>

<section className="sec_pad" data-id="1c70dea4" data-element_type="section" >
<div className="container">
  <div className="row">
              <div className="col-lg-4">   
      {data.map(({ title, text, key }) => {
        return (
          <>
         
            

         <Reveal effect="slideInLeft" duration={1600}> 
                <div className="col-lg-12 d-flex align-items-center">
                <ul className="nav nav-tabs design_tab"  onClick={() => setToggle(key)} role="tablist" style={{ margin: '0 auto'}}>
                    <li className="nav-item wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible' , animationDelay: '0.2s', animationName: 'fadeInUp'}}>
     
                          <a className="nav-link" id="tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">
                              
                              <h5 className="title_color">{title}</h5>
                                <p>{text}</p>
                            </a>
                      </li>
                  </ul>
            </div>
</Reveal>

            </>
) } ) } 





   </div>  
 


                   

           
 
              <div className="col-lg-8">   
      {data.map(({ key, img }) => {
        return (
          <>
  <Reveal effect="fadeIn" duration={1600}> 
        <div className="tab-content">
          
             <div className="tab-pane fade active show" id="two" role="tabpanel" aria-labelledby="two-tab">
                {toggle === key ? (
                    <>
               <img 
                src={img} 
                key={key}/> 
                    </>
                ) : null}
           </div>
        </div>
     </Reveal> 

</>
) } ) } 




</div>
   </div>  
    </div>
</section> 
</> 
) }












