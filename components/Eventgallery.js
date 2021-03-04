import React from 'react';
import Eventgalleryitem from '../components/portfolios/Eventgalleryitem'

const Eventgallery =()=>{
    return(
        <section className="event_gallery_area">
            <div className="row m0 portfolio_gallery event_gallery">
                <Eventgalleryitem image="../home-event/image_01.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                <Eventgalleryitem image="../home-event/image_02.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                <Eventgalleryitem image="../home-event/image_03.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                <Eventgalleryitem image="../home-event/image_04.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                <Eventgalleryitem image="../home-event/image_05.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
                <Eventgalleryitem image="../home-event/image_06.jpg" title="Apple Mobile Mockup" bname="Branding" bname2="Fashion"/>
            </div>
        </section>
    )
}
export default Eventgallery;