import React, { useRef } from 'react';
import "./Button.css";

function Button(props) {
    // when i click on this , it will play an audio sample
   
    return (
    <button id={"btn" + props.id} onClick={(event) => props.playSound(props.url, props.desc, event)}>{props.label}</button>
    );
}

export default Button;
