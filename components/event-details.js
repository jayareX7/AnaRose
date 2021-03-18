import React from 'react';
import Fade from 'react-reveal/Fade'

const EventDetails =()=>{
    return(
        <section className="event_promotion_area">
            <div className="container">
               
                <div className="event_promotion_inner" style={{paddingTop: 8 + 'rem'}}>
                    <Fade top>
                    <div className="event_img">
                        <img src='assets/reviews.png' alt=""/>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default EventDetails;