import React, { Component } from 'react';
import MusicList from './music_list';

export default class MusicControls extends Component{
    constructor(props){
        super(props);
    
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
        this.onPrevClicked = this.onPrevClicked.bind(this);
        this.onNextClicked = this.onNextClicked.bind(this);
        this.onSongSelectedChange = this.onSongSelectedChange.bind(this);
    };
    
    convertTime(time){
        var parsedTime = parseInt(time, 10);
        var minutes = Math.floor(parsedTime / 60);
        var seconds = parsedTime - minutes * 60;

        return  minutes + ":" + parseInt(seconds, 10);
    };
    
    onSliderChange(e){
        let songPlaying = this.props.currentlyPlaying.audio;
            songPlaying.currentTime  = e.target.value;
            this.setSeekState(songPlaying.startTime, songPlaying.duration, e.target.value );
            this.setSongState(e.target.value, songPlaying.duration);

    };
    
    setSongState(passed, remaining){
        this.setState({ "songTime": { "remaining" : this.convertTime(remaining), "passed": this.convertTime(passed)}});
    };
    
    setSeekState(min, max, value){
        this.setState({ "seekInfo": {"min": parseInt(min || 0, 10), "max":  parseInt(max || 0, 10), "value":  value || 0 }});
    };
    
    onPlayClicked(){
        let songPlaying = this.props.currentlyPlaying.audio;
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
       let songPlaying = this.props.currentlyPlaying.audio;
       songPlaying.pause();
    };
    
    onSkipMusic(skipType){
        let prevNext = skipType === "skip" ? 1 : -1;

        this.onPauseClicked();        
        
        // Iterate through songs to see which one is currently playing
        for(var i = 0; i < this.props.albumSongs.length; i++){
            // Confirm which is playing 
            if(this.props.albumSongs[i].songName.toLowerCase() === this.props.currentlyPlaying.title.toLowerCase()){
                prevNext = i + prevNext;
                
                if(prevNext < 0){
                    prevNext = this.props.albumSongs.length - 1;
                }
                else if(prevNext >= this.props.albumSongs.length){
                    prevNext = 0;
                }
                
                return this.props.albumSongs[prevNext];
            }
        }
               

    }
       
    onPrevClicked(){
        let self = this;
        
        this.onPauseClicked();        
        let prevSong =  this.onSkipMusic("prev");
        this.props.skipMusic(prevSong.songName, prevSong.songUrl);
        setTimeout(function(){
            self.onPlayClicked();
        }, 300);
    };
    
    onNextClicked(){
        let self = this;
        
        this.onPauseClicked();        
        let prevSong =  this.onSkipMusic("skip");
        this.props.skipMusic(prevSong.songName, prevSong.songUrl);
        setTimeout(function(){
            self.onPlayClicked();
        }, 300);
    };
    
    onSongSelectedChange(songName, songUrl){
        let self = this;
        
        this.onPauseClicked(); 
        this.props.skipMusic(songName, songUrl);
        setTimeout(function(){
            self.onPlayClicked();
        }, 300); 
    }
    
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
                <MusicList currentlyPlaying={this.props.currentlyPlaying} albumSongs={this.props.albumSongs} onSongSelectedChange={this.onSongSelectedChange}/>
            </div>
        )
    }
};