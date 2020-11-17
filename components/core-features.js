import React from "react";

const CoreFeatures = () => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Our Process
            <br /> That makes us <span>top notch</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/home-chat/pluse.png'
                  alt=""
                />
                <img src='assets/home-chat/chat.png' alt="" />
              </div>
              <a href=".#">
                <h4>Simplify communications</h4>
              </a>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/home-chat/triangle.png'
                  alt=""
                />
                <img src='assets/home-chat/mobile.png' alt="" />
              </div>
              <a href=".#">
                <h4>Quick Responce</h4>
              </a>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/home-chat/box.png'
                  alt=""
                />
                <img src='assets/home-chat/book.png' alt="" />
              </div>
              <a href=".#">
                <h4>Easy Report</h4>
              </a>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
