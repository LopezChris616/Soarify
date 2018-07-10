import React from "react";
import Slide from 'react-reveal/Zoom';

const HomeContent = props => {
    return (
        
            <Slide zoom>
                <div className={props.class}>
                    <h2 className={props.titleContent}>{props.title}</h2>
                    <img src={props.image} alt={props.alt} className="imgSize"/>                        
                    <p className="paraInfo1">{props.info1}</p>
                    <p className="paraInfo2">{props.info2}.</p>
                </div>
            </Slide>
        
    )
}

export default HomeContent;