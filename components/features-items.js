import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class Featuresitems extends Component{
    render(){
        var {rowClass, fimage, iImg, ftitle, descriptions, aClass} = this.props;
        return(
            <div className={`agency_featured_item ${rowClass} `}>
                <div className="col-lg-6">
                   <Reveal effect="fadeInLeft">
                        <div className="agency_featured_img text-right">
                            <img src={ ("assets/" + fimage)} alt=""/>
                        </div>
                   </Reveal>
                </div>
                <div className="col-lg-6">
                    <div className={`agency_featured_content wow fadeInLeft ${aClass}`} data-wow-delay="0.6s">
                    <Reveal effect="fadeInRight">
                        <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
                        <img className="number" src={("assets/" + iImg)} alt=""/>
                        <h3>{ftitle}</h3>
                        <p style={{color: '#3f4451'}}>{descriptions}</p>
                       
                    </Reveal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featuresitems




                          