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
                            "songName": "Belly Dancing",
                            "songUrl": "./songs/Belly Dancing.mp3",
                        },
                        {
                            "songName": "Kehta Hai Pal Pal",
                            "songUrl": "./songs/Kehta Hai Pal Pal.mp3",
                        }
                    ]
                },
                {               
                    "artist": "Trinity",
                    "albumName": "Stragler",
                    "coverArt": "http://www.fuse.tv/image/56fe73a1e05e186b2000009b/768/512/the-boxer-rebellion-ocean-by-ocean-album-cover-full-size.jpg",
                    "songs": [
                        {
                            "songName": "Wave Master",
                            "songUrl": "./songs/Love Mashup 2016 - Kiran Kamath (ApniISP.Com).mp3",
                        },
                        {
                            "songName": "Manjave",
                            "songUrl": "./songs/Manjave (Apniisp.Com).mp3",
                        },
                        {
                            "songName": "Out Of Control",
                            "songUrl": "./songs/Out Of Control (Apniisp.Com).mp3",
                        }
                    ]
                }
            ]
        };        
};

    
  render() {
    return (
        <div className="row">
          <MusicPlayer albumData={this.state.Albums || {}} albumToShow="Tethered" />
          <MusicPlayer albumData={this.state.Albums || {}} albumToShow="Stragler" />
        </div>
    );
  }
}
