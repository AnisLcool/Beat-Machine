import React, { Component } from 'react';
import Buttons from '../../components/Buttons/Buttons';
// import { samples2 } from '../../sounds/samples';
// import {samples1, samples2} from "./../../sounds/samples";

class Pad extends Component {
    state = {
        samples : [],
    }
    componentDidMount(){
        import("./../../sounds/samples").then(data => {
            console.log("didmount :", data.samples1)
            document.addEventListener("keypress", (event) => this.keyPressHandler(event, data.samples1), false);
            this.setState({
                samples: data.samples1
            })
        }).catch(err => {
            console.log("import error: ",err)
        })       
    }

    keyPressHandler = (e, samples) =>{
        console.log("samples keypress , ",samples)
        console.log("event type :" , e.type);
        console.log("key event : ", e.key)
        const sampleObj = samples.find(el => el.label === e.key.toUpperCase());
        if(sampleObj){
            const sound = new Audio(sampleObj.url);
            sound.play()

        }

    }

    playSound = (url, desc, event) => {
        console.log("event type : ", event)
        console.log("clicked : ", desc)
        const sound = new Audio(url);
        sound.play();
    }
    render() {
        return (
            <div>
                <Buttons samples={this.state.samples} playSound={this.playSound} />
            </div>
        );
    }
}

export default Pad;