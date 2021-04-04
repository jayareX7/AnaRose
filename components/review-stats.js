import Fade from 'react-reveal/Fade';
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar/";



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
      <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? 60 : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({    
                rotation: 0,
                textSize: '20px',
                pathTransitionDuration: 2,
                pathColor: '#e9c261',
                textColor: '#3f4451',
                trailColor: '#efd38e', })}
            />
          );
        }}
      </VisibilitySensor>
    </Fade>  
    <Fade bottom duration={1400}>
          <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4>
            <p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
    </Fade>
  </div>
      
  <div className="col-lg-3 col-md-4 progress_item" >
    <Fade bottom duration={1400}>
      <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? 15 : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({    rotation: 0,
                textSize: '20px',
                pathTransitionDuration: 2,
                pathColor: '#e9c261',
                textColor: '#3f4451',
                trailColor: '#efd38e', })}
            />
          );
        }}
      </VisibilitySensor>
    </Fade>  
    <Fade bottom duration={1400}>
          <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4>
            <p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
    </Fade>
  </div>

  <div className="col-lg-3 col-md-4 progress_item" >
    <Fade bottom duration={1400}>
      <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? 50 : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({    rotation: 0,
                textSize: '20px',
                pathTransitionDuration: 2,
                pathColor: '#e9c261',
                textColor: '#3f4451',
                trailColor: '#efd38e', })}
            />
          );
        }}
      </VisibilitySensor>
    </Fade>  
    <Fade bottom duration={1400}>
          <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4>
            <p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
    </Fade>
  </div>

  <div className="col-lg-3 col-md-4 progress_item" >
    <Fade bottom duration={1400}>
      <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? 45 : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({    rotation: 0,
                textSize: '20px',
                pathTransitionDuration: 2,
                pathColor: '#e9c261',
                textColor: '#3f4451',
                trailColor: '#efd38e', })}
            />
          );
        }}
      </VisibilitySensor>
    </Fade>  
    <Fade bottom duration={1400}>
          <h4 className="bison-bold text-center spacing-0 display-6 my-4">Innovations</h4>
            <p className="text-center secondary-color ">Charles Jeffrey up the kyver loo in my flat blimey.!</p>
    </Fade>
  </div>
      
</div>
</div>
      
</>

)}

export default ReviewStats;









    
