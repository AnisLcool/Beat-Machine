import React from 'react';
import "./Button.css";

function Button(props) {
    // console.log("btn render");
    // console.log("=".repeat(20))   
    return (
    <button id={"btn" + props.id} onClick={(event) => props.playSound(props.url, props.desc, event)}>{props.label}</button>
    );
}

export default React.memo(Button, (prevProps, nextProps) => {
    if(prevProps.url !== nextProps.url){
        return false;
    }else{
        return true;
    }
});
