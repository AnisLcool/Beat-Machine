import React from 'react';
import "./Settings.css";

function Settings(props) {
    return (
        <div className="Settings">
            <div className="Power">
                <span>Power</span>
                <label className="switch">
                    <input type="checkbox" onChange={() => props.toggleSwitch("power")} checked={props.power} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="Sound-desc">
                <span>{props.soundDesc}</span>
            </div>
            <div className="Volume">
                <input type="range" value={props.volume} onChange={props.setVolumeHandler} />
            </div>
            <div className="Bank">
                <span>Bank</span>
                <label className="switch">
                    <input type="checkbox" onChange={() => props.toggleSwitch("bank")} checked={props.bank} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Settings;