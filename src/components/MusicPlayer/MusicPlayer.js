import React, { Component } from 'react';
import MusicList from './music_list';
import MusicControls from './MusicControls';
import SongDetails from './SongDetails';

export default class MusicPlayer extends Component {
    constructor(props){
        super(props);
        
        let albumSelected;
        
        if(!this.props.albumData) {console.log("Please provide album json to continue"); return;}
        
        for(var i = 0; i < this.props.albumData.length; i++){
            if(this.props.albumData[i].albumName.toLowerCase() === this.props.albumToShow.toLowerCase()){
                albumSelected = this.props.albumData[i];
            }
        }
                
        this.state = {
            "Album": albumSelected,
            "currentlyPlaying" :{ 
                "audio":  new Audio(albumSelected.songs[0].songUrl),
                "title":  albumSelected.songs[0].songName
            }
        };
        
        
        this.onCurrentlyPlayingChange = this.onCurrentlyPlayingChange.bind(this);
    };
    
    getAlbumSelected(){
        return this.albumSelected;
    }
    
    onCurrentlyPlayingChange(songName, songUrl){
        console.log(songName, songUrl);

        this.setState({
            "Album": this.state.Album,
            "currentlyPlaying" :{ 
                        "audio":  new Audio(songUrl),
                        "title": songName
            }
        });
    };
    
    
  render() {
    return (
        <div className="row col-xs-4 card">
            <img className="card-img-top" src={this.state.Album.coverArt} alt="Card image cap" width="100%"/>
            <MusicControls  songData={this.state.Album}>
                <SongDetails artistName={this.state.Album.artist} albumName={this.state.Album.albumName} songPlayingName={this.state.currentlyPlaying.title}/>
            </MusicControls>
            <MusicList currentlyPlaying={this.state.currentlyPlaying} albumSongs={this.state.Album.songs} onSongSelectedChange={this.onCurrentlyPlayingChange}/>
        </div>
    );
  }
}

