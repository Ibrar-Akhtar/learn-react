import React from "react";
import './cards.css';

const CardComponent = () => {

    return(
        <div className="Container">
            
            <div className="card">
                <h4 className="cardHeading">React</h4>
                <p className="description">card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                <button className="learnMore">Learn More</button>
            </div>
            <div className="card">
                <h4 className="cardHeading">Angular</h4>
                <p className="description">card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                <button className="learnMore">Learn More</button>
            </div>
            <div className="card">
                <h4 className="cardHeading">DotNet</h4>
                <p className="description">card eu fugiat nulla pariatur. Exceptit anim id est laborum.</p>
                <button className="learnMore">Learn More</button>
            </div>
            <div>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>
        </div>

    )
};
export default CardComponent;