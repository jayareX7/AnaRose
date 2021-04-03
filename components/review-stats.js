import Fade from 'react-reveal/Fade';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider'




const ReviewStats =()=>{
return(
    <>

    <div className="container">
        <div className="sec_title mb_70">
            <Fade duration={1600}>
            <h2 className="sacramento display-1 l_height4 text-center body-color ">Measure and increase <br />your reach</h2>
        </Fade>
        </div>

        <div className="row" style={{opacity: '1'}}>

  
    <div className="col-lg-3 col-md-4 progress_item" >
    <Fade bottom duration={1400}>    
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
  </Fade>
              
                 <Fade bottom duration={1400}>
                <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4><p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                </Fade>
        </div>
      
                      
            <div className="col-lg-3 col-md-4 progress_item" >
                 
            <Fade bottom duration={1400}>    
                 <AnimatedProgressProvider
                   valueStart={0}
                   valueEnd={15}
                   duration={1.4}
                   easingFunction={easeQuadInOut}
                 >
                   {value => {
                     const roundedValue = Math.round(value);
                     return (
                       <CircularProgressbar
                         value={value}
                         text={`${roundedValue}%`}
                         styles={buildStyles({ pathTransition: "none" })}
                       />
                     );
                   }}
                 </AnimatedProgressProvider>
             </Fade>
                         
                            <Fade bottom duration={1400}>
                           <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4><p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                           </Fade>
                   </div>


                            
            <div className="col-lg-3 col-md-4 progress_item" >
                 
            <Fade bottom duration={1400}>    
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={50}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
  </Fade>
              
                 <Fade bottom duration={1400}>
                <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4><p className="text-center secondary-color">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                </Fade>
        </div>

                 
            <div className="col-lg-3 col-md-4 progress_item" >
                 
            <Fade bottom duration={1400}>    
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={45}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
  </Fade>
              
                 <Fade bottom duration={1400}>
                <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4><p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
                </Fade>
        </div>
       
        </div>
        </div>
      
</>

)}

export default ReviewStats;









    
