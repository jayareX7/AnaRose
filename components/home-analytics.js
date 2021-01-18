import React from 'react';
import ErpanalyticsItem from "../components/home-analyticsItem";

const Erpanalytics =()=>{
    return(
        <section className="hero_header_area">
            <div className="container">
                <div className="row">
                    <ErpanalyticsItem analyticsImage="settings1.png" text="Quick setup in five simple steps."/>
                    <ErpanalyticsItem analyticsImage="cloud-computing.png" text="Complete purchase history"/>
                    <ErpanalyticsItem analyticsImage="growth.png" text="Signup, No credit  card details required."/>
                </div>
            </div>
        </section>
    )
}
export default Erpanalytics;