import React, { Component } from 'react'
import './project.css'
export class Project extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            Score:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }
    tick = ()=>{
      if(this.state.time!==0){
        this.setState({
            time:this.state.time -1
        })
      }
    //   else{
    //     alert("Time is up!!!!!");
        
    //   }
    }
    incrementCount=()=>{
        if(this.state.time!==0){
        this.setState({
            Score: this.state.Score +1
        })
    }
         }
    
    onRestart=()=>{
        this.setState({
            Score:0,
            time:10
        })
    }
  render() {
    return (
      <div class="container" >
        <h1>Click the animal picture as many as u can in {this.state.time} wacky seconds!</h1>
         <img src="https://img.freepik.com/premium-vector/hand-drawn-modern-flat-style-human-fist-hand-gesture-design-boxing-kick-punch-strength-concept_93150-2046.jpg?w=2000" width="15%" margin-top="2%" onClick={this.incrementCount}  />
         <p>Score:{this.state.Score}</p>
         <p>Enough! I can't be beaten by you</p>
         <button onClick={this.onRestart}>Restart</button>
      </div>
    )
  }
}

export default Project