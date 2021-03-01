import React, { useState } from "react";


const data = [
  {
    id: "1",
    key: "1",
    title: "Collaboration" ,
    text: "Design to development",
    img: "https://saasland2.droitthemes.com/wp-content/uploads/2019/09/tab.png" 
  },
  {
    id: "2",
    key: "2",
    title: "UI/UX design",
    text: "Design to development",
    img: "https://saasland2.droitthemes.com/wp-content/uploads/2019/09/tab_2.png" 
  },
  {
    id: "3",
    key: "3",
    title: "Easy To Maintain",
    text: "Design to development",
    img: "https://saasland2.droitthemes.com/wp-content/uploads/2019/09/tab_3.png"
  }
];



export default function Index3() {

  const [toggle, setToggle] = useState("1");

  return (
<>

<section className="sec_pad" data-id="1c70dea4" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
<div className="container">
  <div className="row">
              <div className="col-lg-4">   
      {data.map(({ title, text, key }) => {
        return (
          <>
         
            
              

                <div className="col-lg-12 d-flex align-items-center">
                <ul className="nav nav-tabs design_tab"  onClick={() => setToggle(key)} role="tablist">
                    <li className="nav-item wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible' , animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                          <a className="nav-link normal_color" id="saasland-tab-2771" data-toggle="tab" role="tab" href="#saasland-tab-content-2771" aria-controls="saasland-tab-content-2771" aria-selected="false">
                              <h5 className="title_color">{title}</h5>
                                <p>{text}</p>
                            </a>
                      </li>
                  </ul>
            </div>


            </>
) } ) } 





   </div>  
 


           
              <div className="col-lg-8">   
      {data.map(({ key, img }) => {
        return (
          <>
    <div className="col-lg-8">
        <div className="tab-content">
            <div className="tab-pane fade active show" aria-labelledby="saasland-tab-2771" role="tabpanel" id="saasland-tab-content-2771">
                <div className="tab_img">
        
                {toggle === key ? (
                    <>
               <img 
                src={img} 
                key={key}/> 
                    </>
                ) : null}
               </div>
            </div>
        </div>
</div>      

</>
) } ) } 




</div>
   </div>  
    </div>
</section> 
</> 
) }












