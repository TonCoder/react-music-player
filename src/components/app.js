import React, { Component } from 'react';
import MusicCard from './MusicPlayer';

export default class App extends Component {
        constructor(props){
        super(props);
            
        this.state = {
            "Albums":[
                {               
                    "artist": "Trinity",
                    "albumName": "Tethered",
                    "coverArt": "http://unrealitymag.com/wp-content/uploads/2015/01/80s_Villains_3.jpg",
                    "currentlyPlaying" :{ 
                        audio:  new Audio('./songs/SampleAudio.mp3'),
                        title: "The flying star child"
                    },
                    "songs": [
                        {
                            "songName": "The Flying Star Child",
                            "songUrl": "/song/SampleAudio.mp3",
                        },
                        {
                            "songName": "Life Beyong One",
                            "songUrl": "/song/SampleAudio.mp3",
                        }
                    ]
                },
                {               
                    "artist": "Cristina Velez",
                    "albumName": "Stragler",
                    "coverArt": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsTKEZ3pPW2Sy7S9ec6J9VeNAy7kJzBwZywcIRur1wLZK3XZn",
                    "songPlaying": "Memories",
                    "currentlyPlaying" : new Audio('./songs/SampleAudio.mp3'),
                    "songs": [
                        {
                            "songName": "Memories",
                            "songUrl": "/song/SampleAudio.mp3",
                        },
                        {
                            "songName": "Life after life",
                            "songUrl": "/song/SampleAudio.mp3",
                        }
                    ]
                }
            ]
        };
    }
    
  render() {
    return (
        <div className="row">
          <MusicCard songData={this.state.Albums[0]}/>
        </div>
    );
  }
}
