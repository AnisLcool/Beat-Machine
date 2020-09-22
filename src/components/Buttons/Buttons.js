import React from 'react';
import Button from './Button/Button';
import "./Buttons.css";

const Buttons = (props) => {
    // console.log("Buttons render");
    // console.log("=".repeat(20))
    const buttons = props.samples.map(sampleObj => {
        return <Button {...sampleObj} playSound={props.playSound} key={sampleObj.id}/>
    });
    
    return (
        <div className="Buttons-container">
            {buttons}
        </div>
    );
};

export default Buttons;
           