import React, { Component } from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Settings from '../../components/Settings/Settings';
import "./Pad.css";
// import { samples2 } from '../../sounds/samples';
// import {samples1, samples2} from "./../../sounds/samples";

class Pad extends Component {
    state = {
        samples: [],
        power: true,
        bank: false,
        soundDesc : "",
        volume: "50",
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

    // shouldComponentUpdate(nextProps , nextState){
    //     console.log("should component update");
    //     console.log("next state : ", nextState.power)
    //     if(!nextState.power){
    //         return false;
    //     }
    //     return true;
    // }
    

    keyPressed = (eventType, e, samples) => {
        const sampleObj = samples.find(el => el.label === e.key.toUpperCase());
        if (sampleObj) {
            const el = document.getElementById(`btn${sampleObj.id}`);
            if(eventType === "keyUp"){
                el.classList.remove("active");
            }else{
                el.classList.add("active");
                el.click();
            }
        }
    }
    keyUpHandler = (e, samples) => {
        if(this.state.power){
            this.keyPressed("keyUp", e, samples)
        }
    }
    keyDownHandler = (e, samples) => {
        if(this.state.power){
            this.keyPressed("keyDown", e, samples)
        }

    }

    playSound = (url, desc) => {
        // console.log("clicked : ", desc)
       if(this.state.power){
        this.setState({soundDesc: desc});
        const sound = new Audio(url);
        sound.volume = parseFloat(this.state.volume) / 100;
        sound.play();
       }
    }

    toggleSwitch = type => {
        if(type === "power"){
            this.setState(prevState => {
                return {
                    power : !prevState.power,
                    soundDesc: ""
                }
            })
            
        }else if(type === "bank"){
            import("./../../sounds/samples").then(data => {
                
                this.setState(prevState => {
                    return {
                        bank : !prevState.bank,
                        samples: this.state.bank ? data.samples1 : data.samples2
                    }
                })
            }).catch(err => {
                console.log("import error: ", err)
            })
            
        }
    }

    setVolumeHandler = (e) =>{
        this.setState({volume: e.target.value})
    }
    render() {
        // console.log("pad render");
        // console.log("=".repeat(20))
        return (
            <div className="Pad">
                <Buttons samples={this.state.samples} playSound={this.playSound} />
                <Settings toggleSwitch={this.toggleSwitch} power={this.state.power} bank={this.state.bank} soundDesc={this.state.soundDesc} setVolumeHandler={this.setVolumeHandler} volume={this.state.volume}/>
            </div>
        );
    }
}

export default Pad;