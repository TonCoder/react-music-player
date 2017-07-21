import React from 'react';

export default function SongDetails(props){
    return(
        <div className="col-xs-12">
            <div className="card-text">
                <span className="songPlayingTitle">{props.songPlayingName || "No song playing"}</span>
                <br/>
                <span className="artistName"> Artist: {props.artistName || "No artist" }</span>
                <br/>
                <span className="albumName">{props.albumName || "No album"}</span>
            </div>
        </div>
    )
};