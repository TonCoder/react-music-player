import React, { Component } from 'react';
import MusicPlayer from './MusicPlayer/MusicPlayer';

export default class App extends Component {
        constructor(props){
        super(props);
            
        this.state = {
            "Albums":[
                {               
                    "artist": "Trinity",
                    "albumName": "Tethered",
                    "coverArt": "http://unrealitymag.com/wp-content/uploads/2015/01/80s_Villains_3.jpg",
                    "songs": [
                        {
                            "songName": "The Flying Star Child",
                            "songUrl": "./songs/SampleAudio.mp3",
                        },
                        {
                            "songName": "Life Beyong One",
                            "songUrl": "./songs/SampleAudio.mp3",
                        }
                    ]
                }
            ]
        };        
}

    
  render() {
    return (
        <div className="row">
          <MusicPlayer albumData={this.state.Albums || {}} albumToShow="Tethered" autoPlay="true"/>
        </div>
    );
  }
}
