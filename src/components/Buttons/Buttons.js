import React from 'react';
import Button from './Button/Button';

const Buttons = (props) => {
    const buttons = props.samples.map(sampleObj => {
        // return <Button playSound={props.playSound} url={sampleObj.url} label={sampleObj.label} key={sampleObj.id} />
        return <Button {...sampleObj} playSound={props.playSound} key={sampleObj.id}/>
    });
    
    return (
        <div>
            {buttons}
        </div>
    );
};

export default Buttons;
           