import React, { Component } from 'react';
import MusicList from './music_list';
import MusicControls from './MusicControls';
import SongDetails from './MusicDetails';

export default class MusicCard extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <div className="row col-xs-4 card">
            <img className="card-img-top" src={this.props.songData.coverArt} alt="Card image cap" width="100%"/>
            <MusicControls  songData={this.props.songData}>
                <SongDetails songData={this.props.songData}/>
            </MusicControls>
            <MusicList songsList={this.props.songData.songs}/>
        </div>
    );
  }
}

