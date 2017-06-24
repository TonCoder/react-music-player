import React, { Component } from 'react';


export default class MusicControls extends Component{
    constructor(props){
        super(props);
        var currentlyPlaying;
        
        this.state = {
            
            "songTime": {
                "remaining": "0:0",
                "passed": "0:0"
            },
            
            "seekInfo": {
                "min": 0,
                "max": 0,
                "value": 0
            },
            
            "isPlaying": false
        };
        
        this.onPlayClicked = this.onPlayClicked.bind(this);
    }
    
    convertTime(time){
        var parsedTime = parseInt(time, 10);
        var minutes = Math.floor(parsedTime / 60);
        var seconds = parsedTime - minutes * 60;

        return  minutes + ":" + parseInt(seconds, 10);
    };
    
    onSliderChange(e){
        let songPlaying = this.props.songData.currentlyPlaying;
            songPlaying.currentTime  = e.target.value;
            this.setSeekState(songPlaying.startTime, songPlaying.duration, e.target.value );
            this.setSongState(e.target.value, songPlaying.duration);

    };
    
    setSongState(passed, remaining){
        this.setState({ "songTime": { "remaining" : this.convertTime(remaining), "passed": this.convertTime(passed)}});
    };
    
    setSeekState(min, max, value){
        this.setState({ "seekInfo": {"min": parseInt(min, 10), "max":  parseInt(max, 10), "value":  value }});
    };
    
    onPlayClicked(){
        let songPlaying = this.props.songData.currentlyPlaying;
        let self = this;
        
        this.setState({ "isPlaying": true });
        this.setSeekState(songPlaying.startTime, songPlaying.duration, this.state.seekInfo.value)
        this.setSongState(this.state.songTime.remaining, songPlaying.duration);
        
		songPlaying.play();
        
        songPlaying.addEventListener('timeupdate',function (){
            var curtime = parseInt(this.currentTime, 10);
            self.setSeekState(songPlaying.startTime, songPlaying.duration, curtime);
            self.setSongState(curtime, songPlaying.duration);
        });
    };
    
    onPauseClicked(e){
       this.setState({"isPlaying": false})
       let songPlaying = this.props.songData.currentlyPlaying;
       songPlaying.pause();
    };
    
    onPrevClicked(){
        
    };
    
    onNextClicked(){
        
    };
    
    
    render(){
        
        const isPlaying = this.state.isPlaying;
        let button = null;
        
        if (!isPlaying) {
          button =  <button id="play" className="play button" onClick={this.onPlayClicked}><i className="fa fa-play" aria-hidden="true"></i></button>;
        } else {
          button = <button id="pause" className="play button" onClick={(event) => this.onPauseClicked(event)}><i className="fa fa-pause" aria-hidden="true"></i></button>;
        }
        
        return(
            <div className="col-xs-12 card-block playerControls">
                <div className="col-xs-3">
                    <span type="text" id="timePassed">{this.state.songTime.passed}</span>
                </div> 
                <div className="col-xs-6">
                    <input type="range" name="seek" id="seek" min={this.state.seekInfo.min} max={this.state.seekInfo.max} value={this.state.seekInfo.value} onChange={(event) => this.onSliderChange(event)}/>
                </div>                 
                <div className="col-xs-3">
                    <span type="text" id="timeRemaining">{this.state.songTime.remaining}</span>
                </div> 
                <div className="center">
                    <button id="prev" className="prev button" onClick={this.onPrevClicked}><i className="fa fa-fast-backward" aria-hidden="true"></i></button>
                    {button}
                    <button id="next" className="next button" onClick={this.onNextClicked}><i className="fa fa-fast-forward" aria-hidden="true"></i></button>
                </div>
                {this.props.children}
            </div>
        )
    }
};