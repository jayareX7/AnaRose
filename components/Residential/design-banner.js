import React from 'react';
import Reveal from 'react-reveal/Reveal/';

const DesignBanner = () => {
    return(
        <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src='assets/seo/triangle_one.png' alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src='assets/seo/triangle_two.png' alt=""/></div>
                <div className="triangle b_nine"><img src='assets/seo/triangle_three.png' alt=""/></div>
            </div>
                
        </section>
    )
}
export default DesignBanner;
