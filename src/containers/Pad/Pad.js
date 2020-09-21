import React, { Component } from 'react';
import Buttons from '../../components/Buttons/Buttons';
import "./Pad.css";
// import { samples2 } from '../../sounds/samples';
// import {samples1, samples2} from "./../../sounds/samples";

class Pad extends Component {
    state = {
        samples: [],
    }


    componentDidMount() {
        import("./../../sounds/samples").then(data => {
            document.addEventListener("keydown", (event) => this.keyDownHandler(event, data.samples1), false);
            document.addEventListener("keyup", (event) => this.keyUpHandler(event, data.samples1), false);
            this.setState({
                samples: data.samples1
            })
        }).catch(err => {
            console.log("import error: ", err)
        })
    }


    keyUpHandler = (e, samples) => {
        const sampleObj = samples.find(el => el.label === e.key.toUpperCase());
        if (sampleObj) {
            const el = document.getElementById(`btn${sampleObj.id}`);
            el.classList.remove("active");
        }
    }
    keyDownHandler = (e, samples) => {
        const sampleObj = samples.find(el => el.label === e.key.toUpperCase());
        if (sampleObj) {
            const el = document.getElementById(`btn${sampleObj.id}`);
            el.classList.add("active");
            el.click();
        }

    }

    playSound = (url, desc) => {
        // console.log("clicked : ", desc)
        const sound = new Audio(url);
        sound.play();
    }
    render() {
        return (
            <div className="Pad">
                <Buttons forwardedRef={this.setBtnRef} samples={this.state.samples} playSound={this.playSound} />
            </div>
        );
    }
}

export default Pad;