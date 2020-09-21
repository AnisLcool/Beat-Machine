import React from 'react';
import Button from './Button/Button';
import "./Buttons.css";

const Buttons = (props) => {
    const buttons = props.samples.map(sampleObj => {
        // return <Button playSound={props.playSound} url={sampleObj.url} label={sampleObj.label} key={sampleObj.id} />
        return <Button forwardedRef={props.forwardedRef} {...sampleObj} playSound={props.playSound} key={sampleObj.id}/>
    });
    
    return (
        <div className="Buttons-container">
            {buttons}
        </div>
    );
};

export default Buttons;
           